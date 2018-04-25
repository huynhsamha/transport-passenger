import express from 'express';

const router = express.Router();

import employee from './employee';
import manager from './manager';
import driver from './driver';


router.use('/', employee);
router.use('/role/manager', manager);
router.use('/role/driver', driver);


export default router;
