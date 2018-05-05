import express from 'express';

const router = express.Router();

import employee from './employee';
import manager from './manager';
import driver from './driver';
import assistant from './assistant';
import seller from './seller';


router.use('/', employee);
router.use('/role/manager', manager);
router.use('/role/driver', driver);
router.use('/role/assistant', assistant);
router.use('/role/seller', seller);


export default router;
