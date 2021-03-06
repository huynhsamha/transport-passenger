import async from 'async';
import unique from 'unique-random';

import { Office, District } from '../../../server/models';

const fake = require('fakerator')();

const fakeOffice = (district_id, is_headquater) => {
  const name = fake.company.name();
  const code = fake.random.number(100, 999);
  const address = fake.address.street();
  let { latitude, longitude } = fake.address.geoLocation();
  latitude = Number(latitude.toFixed(5));
  longitude = Number(longitude.toFixed(5));
  const hotline = fake.phone.number();

  return {
    name,
    code,
    address,
    latitude,
    longitude,
    is_headquater,
    district_id,
    hotline
  };
};

export default () => new Promise((resolve, reject) => {
  District.findAll({ logging: false }).then((districts) => {
    async.eachSeries(districts, (district, cb) => {
      if (district.id % 10 > 0) return cb();
      const offices = [];
      const amountOffice = fake.random.number(1, 3);
      for (let i = 0; i < amountOffice; i++) offices.push(fakeOffice(district.id, i == 0));
      async.eachSeries(offices, (office, cb2) => {
        Office.create(office).then(office => cb2()).catch(err => cb2(err));
      }, ((err) => {
          if (err) return cb(err);
          return cb();
        }));
    }, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  })
    .catch(err => reject(err));
});
