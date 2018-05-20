import express from 'express';

const router = express.Router();

import { BusTypeCtrl } from '../controllers';

router.get('/', BusTypeCtrl.findAll);
router.post('/', BusTypeCtrl.insert);
router.delete('/', BusTypeCtrl.deleteMany);
router.get('/:id', BusTypeCtrl.findOneById);
router.put('/:id', BusTypeCtrl.updateOneById);
router.delete('/:id', BusTypeCtrl.deleteOneById);

router.get('/:id/buses/', BusTypeCtrl.findBusesByOne);

export default router;
