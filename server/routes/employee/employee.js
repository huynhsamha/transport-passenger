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


router.get('/', (req, res, next) => {
  let { offset, limit } = req.query;
  offset = parseInt(offset, 10) || 0;
  limit = parseInt(limit, 10) || 100;
  EmployeeCtrl.findAll(offset, limit, (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    return res.status(200).send({
      data: rows
    });
  });
});

router.post('/', (req, res, next) => {
  const data = req.body;
  EmployeeCtrl.insert(data, (err, ret) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    if (ret.rowsAffected) {
      return res.status(201).send({
        message: 'Data is inserted successfully'
      });
    }
    console.log(ret);
    return res.status(400).send({
      message: 'Data requested to insert is not valid or conflict'
    });
  });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  EmployeeCtrl.findOneById(id, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    if (data) {
      return res.status(201).send({
        data
      });
    }
    return res.status(404).send({
      message: 'Data not found'
    });
  });
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  EmployeeCtrl.updateOneById(id, data, (err, ret) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    if (ret.rowsAffected) {
      return res.status(200).send({
        message: 'Data is updated'
      });
    }
    console.log(ret);
    return res.status(400).send({
      message: 'Data requested to update is not valid or conflict'
    });
  });
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  EmployeeCtrl.deleteOneById(id, (err, ret) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    if (ret.rowsAffected) {
      return res.status(200).send({
        message: 'Data is deleted'
      });
    }
    console.log(ret);
    return res.status(404).send({
      message: 'Data requested to delete is not found'
    });
  });
});

// not test
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
