import express from 'express';

import auth from './auth';

import busType from './busType';
import bus from './bus';
import tripDaily from './tripDaily';
import trip from './trip';
import employee from './employee';

const router = express.Router();


router.use('/api', auth);

router.use('/api/v1/busType', busType);
router.use('/api/v1/bus', bus);
router.use('/api/v1/tripDaily', tripDaily);
router.use('/api/v1/trip', trip);
router.use('/api/v1/employee', employee);

export default router;
