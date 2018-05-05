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
import { Employee, Department } from '../models';

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

  const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.session.token;
  if (!token) {
    return res.status(401).send({ errorMessage: 'No authentication for request' });
  }
  jwt.verify(token, config.session.secret, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(403).send({ errorMessage: 'Token is not valid' });
    }
    return next();
  });
}

async function signIn(req, res, next) {
  const username = req.body.username || '';
  const password = req.body.password || '';
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
    user.password = null;
    req.session.user = user;
    req.session.token = token;
    return res.status(200).send({ user, token });

  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
}

async function forgotPassword(req, res, next) {
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
    const domain = config.domain;
    const url = `${domain}/auth/resetPassword?token=${token}`;
    const mailOptions = {
      from: config.email.address,
      to: email,
      subject: '[Transport Passenger] Please reset your password',
      html:
        `<p>Dear ${`${user.FIRST_NAME} ${user.LAST_NAME}`},</p>
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
}

function resetPassword(req, res, next) {
  const { token, password } = req.body;
  jwt.verify(token, config.session.secret, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(403).send({ errorMessage: 'Token is not valid' });
    }
    // chưa test ở chỗ này, chờ front-end.
    const { email } = decoded;
    Employee.update({ password }, { where: { email } })
      .then(res => res.status(200).send({ message: 'Reset password successfully' }))
      .catch((err) => {
        console.log(err);
        return res.status(500).send(err);
      });
  });
}

function signOut(req, res, next) {
  req.session.destroy();
  res.redirect('/');
}

export default {
  authorization,
  signIn,
  forgotPassword,
  resetPassword,
  signOut
};
