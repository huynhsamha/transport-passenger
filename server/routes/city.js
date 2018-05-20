import express from 'express';

const router = express.Router();

import { CityCtrl } from '../controllers';

router.get('/', CityCtrl.findAll);
router.post('/', CityCtrl.insert);
router.delete('/', CityCtrl.deleteMany);
router.get('/:id', CityCtrl.findOneById);
router.put('/:id', CityCtrl.updateOneById);
router.delete('/:id', CityCtrl.deleteOneById);
router.get('/:id/districts', CityCtrl.findDistricts);
router.get('/:id/center_district', CityCtrl.findCenterDistrict);


export default router;
