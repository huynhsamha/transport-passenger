import async from 'async';
import unique from 'unique-random';

import { TripDaily, BusStation, BusType } from '../../../server/models';

const fake = require('fakerator')();

const fakeTripDaily = (depart_station_id, arrive_station_id, bus_type_id) => {
  const name = fake.company.name();
  const code = fake;
  const h = fake.random.number(0, 24);
  const m = fake.random.number(0, 1) * 30;
  const depart_time = new Date();
  depart_time.setHours(h); depart_time.setMinutes(m);
  const duration = fake.random.number(6, 120) * 30;

  return {
    name,
    code,
    arrive_station_id,
    depart_station_id,
    bus_type_id,
    duration,
    depart_time
  };
};

export default () => new Promise((resolve, reject) => {
  // District.findAll().then((districts) => {
  //   async.eachSeries(districts, (district, cb) => {
  //     if (district.id % 10 > 0) return cb();
  //     const offices = [];
  //     const amountOffice = fake.random.number(1, 3);
  //     for (let i = 0; i < amountOffice; i++) offices.push(fakeOffice(district.id, i == 0));
  //     async.eachSeries(offices, (office, cb2) => {
  //       Office.create(office).then((office) => {
  //         console.log(`Office ${office.id} created`);
  //         return cb2();
  //       }).catch(err => cb2(err));
  //     }, ((err) => {
  //         if (err) return cb(err);
  //         return cb();
  //       }));
  //   }, (err) => {
  //     if (err) return reject(err);
  //     return resolve();
  //   });
  // })
  //   .catch(err => reject(err));
});
