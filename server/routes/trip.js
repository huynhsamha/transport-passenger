import express from 'express';

const router = express.Router();

import { TripCtrl } from '../controllers';

router.get('/', TripCtrl.findAll);
router.post('/', TripCtrl.insert);
router.delete('/', TripCtrl.deleteMany);
router.get('/:id', TripCtrl.findOneById);
router.put('/:id', TripCtrl.updateOneById);
router.delete('/:id', TripCtrl.deleteOneById);


export default router;
