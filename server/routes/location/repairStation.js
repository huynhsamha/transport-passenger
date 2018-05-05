import express from 'express';

const router = express.Router();

import { RepairStationCtrl } from '../../controllers';

router.get('/', RepairStationCtrl.findAll);
router.post('/', RepairStationCtrl.insert);
router.get('/:id', RepairStationCtrl.findOneById);
router.put('/:id', RepairStationCtrl.updateOneById);
router.delete('/:id', RepairStationCtrl.deleteOneById);


export default router;
