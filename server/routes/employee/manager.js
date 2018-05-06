import express from 'express';

const router = express.Router();

import { ManagerCtrl } from '../../controllers';

router.get('/', ManagerCtrl.findAll);
router.post('/', ManagerCtrl.insert);
router.get('/:id', ManagerCtrl.findOneById);
router.put('/:id', ManagerCtrl.updateOneById);
router.delete('/:id', ManagerCtrl.deleteOneById);
router.get('/:id/subordinates', ManagerCtrl.findSubordinates);


export default router;
