import express from 'express';

const router = express.Router();

import { SellerCtrl } from '../../controllers';

router.get('/', SellerCtrl.findAll);
router.post('/', SellerCtrl.insert);
router.get('/:id', SellerCtrl.findOneById);
router.put('/:id', SellerCtrl.updateOneById);
router.delete('/:id', SellerCtrl.deleteOneById);


export default router;
