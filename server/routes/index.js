import express from 'express';
import busType from './busType';

const router = express.Router();

router.use('/api/v1/busType', busType);

export default router;
