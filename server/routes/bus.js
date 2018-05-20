import express from 'express';

const router = express.Router();

import { BusCtrl } from '../controllers';

router.get('/', BusCtrl.findAll);
router.post('/', BusCtrl.insert);
router.delete('/', BusCtrl.deleteMany);
router.get('/:id', BusCtrl.findOneById);
router.put('/:id', BusCtrl.updateOneById);
router.delete('/:id', BusCtrl.deleteOneById);


export default router;
