import express from 'express';

const router = express.Router();

import { BusStationCtrl } from '../../controllers';

router.get('/', BusStationCtrl.findAll);
router.post('/', BusStationCtrl.insert);
router.get('/:id', BusStationCtrl.findOneById);
router.put('/:id', BusStationCtrl.updateOneById);
router.delete('/:id', BusStationCtrl.deleteOneById);


export default router;
