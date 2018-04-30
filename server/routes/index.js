import express from 'express';

import auth from './auth';

import busType from './busType';
import bus from './bus';
import tripDaily from './tripDaily';
import trip from './trip';
import office from './office';
import employee from './employee';
import ticket from './ticket';
import customer from './customer';
import transaction from './transaction';
import department from './department';

const router = express.Router();


router.use('/api', auth);

router.use('/api/v1/busType', busType);
router.use('/api/v1/bus', bus);
router.use('/api/v1/tripDaily', tripDaily);
router.use('/api/v1/trip', trip);
router.use('/api/v1/office', office);
router.use('/api/v1/employee', employee);
router.use('/api/v1/ticket', ticket);
router.use('/api/v1/customer', customer);
router.use('/api/v1/transaction', transaction);
router.use('/api/v1/department', department);

export default router;
