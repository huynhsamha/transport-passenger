import express from 'express';

const router = express.Router();

import jwt from 'jsonwebtoken';
import AuthCtrl from '../controllers/auth';
import config from '../../config/db';


router.post('/auth/signIn', (req, res, next) => {
  const username = req.body.username || '';
  const password = req.body.password || '';
  AuthCtrl.signIn(username, password, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ errorMessage: err.errorMessage });
    }
    if (data.userNotFound) {
      return res.status(404).send({ message: 'User not found' });
    }
    if (data.wrongPassword) {
      return res.status(401).send({ message: 'Wrong password' });
    }
    res.status(200).send({ user: data.user, token: data.token });
  });
});

router.post('/auth/forgotPassword', (req, res, next) => {
  const email = req.body.email || '';
  AuthCtrl.forgotPassword(email, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ errorMessage: err.errorMessage });
    }
    res.status(200).send({
      message: 'Check your email for a link to reset your password.'
    });
  });
});

router.post('/auth/resetPassword', (req, res, next) => {
  const resetPasswordToken = req.body.resetPasswordToken || '';
  const newPassword = req.body.newPassword || '';
  AuthCtrl.resetPassword(resetPasswordToken, newPassword, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.status(200).send(data);
  });
});

router.get('/signout', (req, res, next) => {
  res.redirect('/');
});

export default router;
