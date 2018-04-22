import express from 'express';

const router = express.Router();

import AccountCtrl from '../controllers/account';

router.get('/', (req, res, next) => {
  let { offset, limit } = req.query;
  offset = offset || 0;
  limit = limit || 100;
  AccountCtrl.findAll(offset, limit, (err, rows) => {
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
  AccountCtrl.insert(data, (err, success) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    if (success) {
      return res.status(201).send({
        message: 'Data is inserted successfully'
      });
    }
    return res.status(400).send({
      message: 'Data requested to insert is not valid or conflict'
    });
  });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  AccountCtrl.findOneById(id, (err, data) => {
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
  const id = req.params.id;
  const data = req.body;
  AccountCtrl.updateOneById(id, data, (err, success) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    if (success) {
      return res.status(200).send({
        message: 'Data is updated'
      });
    }
    return res.status(400).send({
      message: 'Data requested to update is not valid or conflict'
    });
  });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  AccountCtrl.deleteOneById(id, (err, success) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    if (success) {
      return res.status(200).send({
        message: 'Data is deleted'
      });
    }
    return res.status(404).send({
      message: 'Data requested to delete is not found'
    });
  });
});

export default router;
