import express from 'express';

const router = express.Router();

import { LocationCtrl } from '../../controllers';

router.get('/', LocationCtrl.findAll);
router.post('/', LocationCtrl.insert);
router.get('/:id', LocationCtrl.findOneById);
router.put('/:id', LocationCtrl.updateOneById);
router.delete('/:id', LocationCtrl.deleteOneById);


export default router;
