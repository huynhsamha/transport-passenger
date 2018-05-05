import express from 'express';

const router = express.Router();

import location from './location';
import busStation from './busStation';
import repairStation from './repairStation';

router.use('/', location);
router.use('/station/bus', busStation);
router.use('/station/repair', repairStation);


export default router;
