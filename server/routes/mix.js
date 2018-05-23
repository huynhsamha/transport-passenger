import express from 'express';
import sequelize, { Employee, Office, Department } from '../models';

const router = express.Router();


router.get('/salary_by_role', async (req, res, next) => {
  Employee.findAll({
    attributes: ['role',
      [sequelize.fn('sum', sequelize.col('salary')), 'sum_salary']
    ],
    group: ['role']
  })
    .then((data) => {
      res.status(200).send({ data });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

export default router;
