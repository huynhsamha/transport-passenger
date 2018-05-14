import async from 'async';
import unique from 'unique-random';

import { Office, Department, Manager, Employee } from '../../../server/models';

const fake = require('fakerator')();

export default () => new Promise((resolve, reject) => {
  Department.findAll({ logging: false }).then((ds) => {
    async.eachSeries(ds, (d, cb) => {
      const mgrid = d.manager_id;
      Employee.findById(mgrid).then(e => e.update({ department_id: d.id }))
        .then(() => cb())
        .catch(err => cb(err));
    }, (err) => {
      if (err) throw err;
      resolve();
    });
  })
    .catch(err => reject(err));
});
