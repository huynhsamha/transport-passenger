import express from 'express';

const router = express.Router();

import { DriverCtrl } from '../../controllers';

router.get('/', DriverCtrl.findAll);
router.post('/', DriverCtrl.insert);
router.get('/:id', DriverCtrl.findOneById);
router.put('/:id', DriverCtrl.updateOneById);
router.delete('/:id', DriverCtrl.deleteOneById);


export default router;
