import express from 'express';
import busType from './busType';
import bus from './bus';

const router = express.Router();

router.use('/api/v1/busType', busType);
router.use('/api/v1/bus', bus);

export default router;
