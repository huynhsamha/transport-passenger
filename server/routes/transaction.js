import express from 'express';

const router = express.Router();

import { TransactionCtrl } from '../controllers';

router.get('/', TransactionCtrl.findAll);
router.post('/', TransactionCtrl.insert);
router.delete('/', TransactionCtrl.deleteMany);
router.get('/:id', TransactionCtrl.findOneById);
router.put('/:id', TransactionCtrl.updateOneById);
router.delete('/:id', TransactionCtrl.deleteOneById);


export default router;
