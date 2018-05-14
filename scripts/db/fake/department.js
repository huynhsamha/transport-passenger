import async from 'async';
import unique from 'unique-random';

import { Office, Department, Manager } from '../../../server/models';

const fake = require('fakerator')();

const TYPE = ['Human Resource', 'Business', 'Financial', 'Shipping', 'Equipment'];
const NAME = ['Nhân Sự', 'Kinh Doanh', 'Tài Chính', 'Vận Chuyển', 'Thiếtt Bị'];
const fakeDepartment = (manager_id, office_id, idx) => {
  const type = TYPE[idx];
  const name = NAME[idx];
  return {
    type, name, manager_id, office_id
  };
};

export default () => new Promise((resolve, reject) => {

  async.waterfall([
    (cb) => {
      Manager.findAll({ logging: false }).then((managers) => {
        const mgrids = managers.map(o => o.id);
        cb(null, mgrids);
      }).catch(err => cb(err));
    },
    (mgrids, cb) => {
      let idx = 0;
      Office.findAll({ logging: false }).then((offices) => {
        async.eachSeries(offices, (office, cb2) => {
          const departments = [];
          const amountDepartment = TYPE.length;
          for (let i = 0; i < amountDepartment; i++)
            departments.push(fakeDepartment(mgrids[idx], office.id, i));
          idx = (idx + 1) % mgrids.length;
          async.eachSeries(departments, (department, cb3) => {
            Department.create(department).then(department => cb3()).catch(err => cb3(err));
          }, ((err) => {
              if (err) return cb2(err);
              return cb2();
            }));
        }, (err) => {
          if (err) return cb(err);
          return cb();
        });
      })
        .catch(err => cb(err));
    }
  ], (err) => {
    if (err) return reject(err);
    return resolve();
  });
});
