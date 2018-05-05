import express from 'express';

const router = express.Router();

import { OfficeCtrl } from '../controllers';

router.get('/', OfficeCtrl.findAll);
router.post('/', OfficeCtrl.insert);
router.get('/:id', OfficeCtrl.findOneById);
router.put('/:id', OfficeCtrl.updateOneById);
router.delete('/:id', OfficeCtrl.deleteOneById);


export default router;
