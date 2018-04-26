import fs from 'fs';
import jwt from 'jsonwebtoken';
import path from 'path';
import async from 'async';
import crypto from 'crypto-js';
import nodemailer from 'nodemailer';
import generatePassword from 'generate-password';
import config from '../../config/config';

import { EmployeeCtrl } from './employee';
import { Employee } from '../models/employee';

async function signIn(username, password, cb) {
  try {
    const user = await EmployeeCtrl.findOneByUsername(username);
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

function forgotPassword(email, cb) {

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
