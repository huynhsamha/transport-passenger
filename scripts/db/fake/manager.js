import async from 'async';
import unique from 'unique-random';

import fakeEmployee from './employee';
import { Employee, Manager } from '../../../server/models';

const fake = require('fakerator')();

const fakeManager = (id) => {
  const start_date = fake.date.past();
  return { id, start_date };
};

export default () => new Promise((resolve, reject) => {
  const amountManager = 50;
  const employees = [];
  for (let i = 0; i < amountManager; i++) employees.push(fakeEmployee('manager'));
  async.eachSeries(employees, (employee, cb) => {
    Employee.create(employee).then((employee) => {
      Manager.create(fakeManager(employee.id)).then(manager => cb()).catch(err => cb(err));
    }).catch(err => cb(err));
  }, (err) => {
    if (err) return reject(err);
    return resolve();
  });
});
