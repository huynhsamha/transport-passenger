import async from 'async';
import unique from 'unique-random';

import { Office, Department, Manager, Employee } from '../../../server/models';

const fake = require('fakerator')();

export default () => new Promise((resolve, reject) => {
  async.waterfall([
    (cb) => {
      Department.findAll().then(ds => cb(null, ds.map(o => o.id))).catch(err => cb(err));
    },
    (dids, cb) => {
      Employee.findAll().then((es) => {
        async.eachSeries(es, (e, cb1) => {
          if (e.department_id) return cb1();
          const department_id = dids[fake.random.number(0, dids.length - 1)];
          e.update({ department_id }).then(() => cb1()).catch(err => cb1(err));
        }, (err) => {
          if (err) return cb(err);
          return cb();
        });
      });
    }
  ], (err) => {
    if (err) return reject(err);
    resolve();
  });
});
