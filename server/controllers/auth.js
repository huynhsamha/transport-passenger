import fs from 'fs';
import jwt from 'jsonwebtoken';
import path from 'path';
import async from 'async';
import crypto from 'crypto-js';
import cryptoNode from 'crypto';
import nodemailer from 'nodemailer';
import generatePassword from 'generate-password';
import config from '../../config/config';

import { EmployeeCtrl } from './employee';
import { Employee, Department, AuthToken, ResetPasswordToken } from '../models';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email.address,
    pass: config.email.password
  }
});

function authorization(req, res, next) {

  if (req.path.includes('auth')) return next();

  // only for development with authentication secret
  if (config.env == 'development') {
    const authSecret = req.body.authSecret || req.query.authSecret || req.headers['x-access-token'];
    if (authSecret == config.authenticationSecret) return next();
  }

  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
    return res.status(401).send({ errorMessage: 'No authentication for request' });
  }
  AuthToken.findByPrimary(token, { logging: false }).then((info) => {
    if (!info || info.expire < new Date().getTime()) {
      if (info) {
        info.destroy().then(() => { }).catch((err) => {
          console.log(err);
        });
      }
      return res.status(403).send({ errorMessage: 'Token is not valid' });
    }
    return next();
  }).catch((err) => {
    console.log(err);
    res.status(500).send(err);
  });
}

const signIn = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await Employee.findOne({ where: { username } });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    if (!user.authenticate(password)) {
      return res.status(401).send({ message: 'Wrong password' });
    }
    const token = jwt.sign(
      { data: user },
      config.session.secret,
      { expiresIn: config.tokenExpire }
    );
    const expire = new Date().getTime() + config.tokenExpire * 1000;
    user.password = null;
    await AuthToken.create({ token, expire });
    return res.status(200).send({ user, token });

  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

const forgotPassword = async (req, res, next) => {
  const email = req.body.email || '';
  try {
    const user = await Employee.findOne({ where: { email } });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    const token = jwt.sign(
      { data: email },
      config.session.secret,
      { expiresIn: config.tokenResetPassword }
    );
    const expire = new Date().getTime() + config.tokenResetPassword * 1000;
    await ResetPasswordToken.create({ token, expire, email });
    const domain = config.domain;
    const url = `${domain}/auth/resetPassword?token=${token}`;
    const mailOptions = {
      from: config.email.address,
      to: email,
      subject: '[Transport Passenger] Please reset your password',
      html:
        `<p>Dear ${`${user.first_name} ${user.last_name}`},</p>
        <p>We heard that you lost your Transport Passenger password. Sorry about that!</p>
        <p>But don’t worry! You can use the following link to reset your password:</p>
        <p></p>
        <p><a href="${url}">${url}</a></p>
        <p></p>
        If you don’t use this link within 15 minutes, it will expire.
        <p></p>
        <p>Thanks,</p>
        <p>Your friends at Transport Passenger</p>`
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) { console.log(err); }
    });
    return res.status(200).send({
      message: `Please check your email to reset your password.
      If no have any email in 15 minutes, please check in spam or try agin.`
    });

  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

const resetPassword = async (req, res, next) => {
  const { token, password } = req.body;
  try {
    const info = await ResetPasswordToken.findByPrimary(token);
    if (!info || info.expire < new Date().getTime()) {
      if (info) {
        info.destroy().then(() => { }).catch((err) => {
          console.log(err);
        });
      }
      return res.status(403).send({ errorMessage: 'Token is not valid' });
    }
    const { email } = info;
    const user = await Employee.findOne({ where: { email } });
    await user.update({ password: user.hashPassword(password) });
    await info.destroy();
    return res.status(200).send({ message: 'Reset password successfully' });

  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

function signOut(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  AuthToken.findByPrimary(token).then(info => info.destroy())
    .then(() => res.redirect('/'))
    .catch((err) => {
      console.log(err);
      return res.redirect('/');
    });
}

export default {
  authorization,
  signIn,
  forgotPassword,
  resetPassword,
  signOut
};
