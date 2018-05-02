import express from 'express';

const router = express.Router();

import jwt from 'jsonwebtoken';
import AuthCtrl from '../controllers/auth';
import config from '../../config/config';


router.use('/', (req, res, next) => {
  if (req.path.includes('auth')) {
    return next();
  }

  // only for development with authentication secret
  if (config.env == 'development') {
    const authSecret = req.body.authSecret || req.query.authSecret || req.headers['x-access-token'];
    if (authSecret == config.authenticationSecret) {
      return next();
    }
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
    if (data.userNotFound) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(200).send({
      message: `Please check your email to reset your password.
      If no have any email in 15 minutes, please check in spam or try agin.`
    });
  });
});

router.post('/auth/resetPassword', (req, res, next) => {
  const { token, password } = req.body;
  AuthCtrl.resetPassword(token, password, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ errorMessage: err.errorMessage });
    }
    if (data.tokenNotValid) {
      return res.status(403).send({ message: 'Token is not valid' });
    }
    return res.status(200).send({
      message: 'Reset password successfully'
    });
  });
});


router.get('/signOut', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
});

export default router;
