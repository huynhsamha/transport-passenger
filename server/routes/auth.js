import express from 'express';

const router = express.Router();

import jwt from 'jsonwebtoken';
import AuthCtrl from '../controllers/auth';
import config from '../../config/config';


router.use('/', AuthCtrl.authorization);

router.post('/auth/signIn', AuthCtrl.signIn);
router.post('/auth/forgotPassword', AuthCtrl.forgotPassword);
router.post('/auth/resetPassword', AuthCtrl.resetPassword);

router.get('/signOut', AuthCtrl.signOut);

export default router;
