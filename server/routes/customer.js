import express from 'express';

const router = express.Router();

import { CustomerCtrl } from '../controllers';

router.get('/', CustomerCtrl.findAll);
router.post('/', CustomerCtrl.insert);
router.get('/:id', CustomerCtrl.findOneById);
router.put('/:id', CustomerCtrl.updateOneById);
router.delete('/:id', CustomerCtrl.deleteOneById);


export default router;
