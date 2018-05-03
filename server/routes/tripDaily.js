import express from 'express';

const router = express.Router();

import { TripDailyCtrl } from '../controllers';

router.get('/', TripDailyCtrl.findAll);
router.post('/', TripDailyCtrl.insert);
router.get('/:id', TripDailyCtrl.findOneById);
router.put('/:id', TripDailyCtrl.updateOneById);
router.delete('/:id', TripDailyCtrl.deleteOneById);


export default router;
