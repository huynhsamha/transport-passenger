import express from 'express';

const router = express.Router();

import jwt from 'jsonwebtoken';
import AuthCtrl from '../controllers/auth';
import config from '../../config/config';


router.use('/', (req, res, next) => {
  if (req.path.includes('auth')) {
    return next();
  }

  // only for admin have authentication secret in .env on post method
  const authSecret = req.body.authSecret || req.query.authSecret;
  if (authSecret == config.authenticationSecret) {
    return next();
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
});

router.post('/auth/signIn', (req, res, next) => {
  const username = req.body.username || '';
  const password = req.body.password || '';
  // console.log(username, password);
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
    req.session.user = data.user;
    req.session.token = data.token;
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
