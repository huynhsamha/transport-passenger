import express from 'express';

const router = express.Router();

import employee from './employee';
import manager from './manager';
import driver from './driver';
import assistant from './assistant';
import seller from './seller';


router.use('/employee', employee);

router.use('/manager', manager);
router.use('/driver', driver);
router.use('/assistant', assistant);
router.use('/seller', seller);


export default router;
