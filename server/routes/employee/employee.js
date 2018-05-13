import express from 'express';
import multer from 'multer';
import path from 'path';

import { EmployeeCtrl } from '../../controllers';

const router = express.Router();

const destination = path.join(__dirname, '../../tmp/uploads/');
const storage = multer.diskStorage({
  destination,
  filename(req, file, cb) {
    cb(null, `${Date.now()}_${file.fieldname}`);
  }
});
const upload = multer({ storage });


router.get('/', EmployeeCtrl.findAll);
router.post('/', EmployeeCtrl.insert);
router.get('/:id', EmployeeCtrl.findOneById);
router.put('/:id', EmployeeCtrl.updateOneById);
router.delete('/:id', EmployeeCtrl.deleteOneById);
router.post('/:id/changePassword', EmployeeCtrl.changePassword);


// error here
router.put('/:id/upload-avatar', upload.single('avatar'), (req, res, next) => {
  if (!req.file) {
    return res.status(404).send({ message: 'No file received' });
  }
  console.log(req.file.filename);
  console.log(req.file.originalname);
  console.log(req.file.size);
  console.log(req.file.path);
  console.log(req.file.destination);
  return res.status(200).send({ message: 'File received' });
});


export default router;
