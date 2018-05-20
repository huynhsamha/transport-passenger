import express from 'express';

const router = express.Router();

import { DepartmentCtrl } from '../controllers';

router.get('/', DepartmentCtrl.findAll);
router.post('/', DepartmentCtrl.insert);
router.delete('/', DepartmentCtrl.deleteMany);
router.get('/:id', DepartmentCtrl.findOneById);
router.put('/:id', DepartmentCtrl.updateOneById);
router.delete('/:id', DepartmentCtrl.deleteOneById);


export default router;
