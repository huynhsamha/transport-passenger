import express from 'express';
import account from './account';

const router = express.Router();

router.use('/api/v1/account', account);

export default router;
