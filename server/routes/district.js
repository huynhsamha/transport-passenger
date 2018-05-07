import express from 'express';

const router = express.Router();

import { DistrictCtrl } from '../controllers';

router.get('/', DistrictCtrl.findAll);
router.post('/', DistrictCtrl.insert);
router.get('/:id', DistrictCtrl.findOneById);
router.put('/:id', DistrictCtrl.updateOneById);
router.delete('/:id', DistrictCtrl.deleteOneById);


export default router;
