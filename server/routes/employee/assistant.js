import express from 'express';

const router = express.Router();

import { AssistantCtrl } from '../../controllers';

router.get('/', AssistantCtrl.findAll);
router.post('/', AssistantCtrl.insert);
router.get('/:id', AssistantCtrl.findOneById);
router.put('/:id', AssistantCtrl.updateOneById);
router.delete('/:id', AssistantCtrl.deleteOneById);


export default router;
