import fs from 'fs';
import jwt from 'jsonwebtoken';
import path from 'path';
import async from 'async';
import crypto from 'crypto-js';
import nodemailer from 'nodemailer';
import generatePassword from 'generate-password';

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
    return cb(null, { success: 1 });
  } catch (err) {
    return cb(err);
  }
}

function forgotPassword(email, callback) {

}

function resetPassword(resetPasswordToken, newPassword, callback) {

}

function verifyAccount(encryptEmail, newPassword, callback) {

}

export default {
  signIn,
  forgotPassword,
  resetPassword,
  verifyAccount
};
