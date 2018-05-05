import express from 'express';

const router = express.Router();

import { TicketCtrl } from '../controllers';

router.get('/', TicketCtrl.findAll);
router.post('/', TicketCtrl.insert);
router.get('/:id', TicketCtrl.findOneById);
router.put('/:id', TicketCtrl.updateOneById);
router.delete('/:id', TicketCtrl.deleteOneById);


export default router;
