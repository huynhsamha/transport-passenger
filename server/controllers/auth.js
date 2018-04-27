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
import { Employee } from '../models/employee';

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email.address,
    pass: config.email.password
  }
});


async function signIn(username, password, cb) {
  try {
    const user = await EmployeeCtrl.findOneByUsername(username);
    // console.log(user);
    if (!user) {
      return cb(null, { userNotFound: 1 });
    }
    if (Employee.authenticate(username, user.PASSWORD, password) == false) {
      return cb(null, { wrongPassword: 1 });
    }
    const token = jwt.sign(
      { data: user },
      config.session.secret,
      { expiresIn: config.tokenExpire }
    );
    user.PASSWORD = null;
    return cb(null, { success: 1, user, token });
  } catch (err) {
    return cb(err);
  }
}

async function forgotPassword(email, cb) {
  try {
    const user = await EmployeeCtrl.findOneByEmail(email);
    if (!user) {
      return cb(null, { userNotFound: 1 });
    }
    const token = jwt.sign(
      { data: email },
      config.session.secret,
      { expiresIn: config.tokenResetPassword }
    );
    const domain = 'http://localhost:4200';
    const url = `${domain}/auth/verifyResetPassword?token=${token}`;
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
    return cb(null, { success: 1 });
  } catch (err) {
    return cb(err);
  }
}

function resetPassword(resetPasswordToken, newPassword, cb) {

}

function verifyAccount(encryptEmail, newPassword, cb) {

}

export default {
  signIn,
  forgotPassword,
  resetPassword,
  verifyAccount
};
