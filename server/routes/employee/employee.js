import express from 'express';

const router = express.Router();

import { EmployeeCtrl } from '../../controllers';

router.get('/', EmployeeCtrl.findAll);
router.post('/', EmployeeCtrl.insert);
router.get('/:id', EmployeeCtrl.findOneById);
router.put('/:id', EmployeeCtrl.updateOneById);
router.delete('/:id', EmployeeCtrl.deleteOneById);


export default router;
