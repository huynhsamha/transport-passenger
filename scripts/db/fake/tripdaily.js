import async from 'async';
import unique from 'unique-random';

import { TripDaily, BusStation, BusType, City, District, Location } from '../../../server/models';

const fake = require('fakerator')();

export default () => new Promise((resolve, reject) => {
  async.waterfall([
    (cb) => {
      BusType.findAll({ logging: false }).then(ls => cb(null, ls.map(o => o.id))).catch(err => cb(err));
    },
    (bustype_ids, cb) => {
      City.findAll({ logging: false }).then(ls => cb(null, bustype_ids, ls)).catch(err => cb(err));
    },
    (bustype_ids, cities, cb) => {
      async.eachSeries(cities, async (a, cba) => {

        const das = await a.getDistricts({ logging: false });
        async.eachSeries(cities, async (b, cbb) => {

          if (a.id == b.id || b.id - a.id > 10 || a.id - b.id > 8) return cbb();
          const db = await District.findById(b.center_district_id, { logging: false });
          async.eachSeries(das, async (da, cbd) => {

            const bsta = await Location.findAll({ where: { district_id: da.id, type: 'bus' }, logging: false });
            const bstb = await Location.findAll({ where: { district_id: db.id, type: 'bus' }, logging: false });

            if (bsta == null || bsta.length == 0) return cbd();
            if (bstb == null || bstb.length == 0) return cbd();

            const depart_station_id = bsta[0].id;
            const arrive_station_id = bstb[0].id;
            const name = `${a.name} (${da.name}) - ${b.name} (${db.name})`;
            const code = `DE${a.code}${da.code}_AR${b.code}${db.code}`;
            const price = fake.random.number(1000, 9999) * 10.1;
            const distance = fake.random.number(10, 20) * 1.1;
            const hotline = fake.phone.number();
            const bus_type_id = bustype_ids[fake.random.number(0, bustype_ids.length - 1)];
            let depart_time = new Date();
            depart_time.setHours(fake.random.number(0, 24));
            depart_time.setMinutes(fake.random.number(0, 12) * 5);
            depart_time.setMilliseconds(0);
            depart_time = depart_time.toTimeString().slice(0, 9);
            const duration = fake.random.number(1, 20) * 30;

            // console.log(depart_station_id);
            // console.log(arrive_station_id);
            // console.log(name);
            // console.log(code);
            // console.log(price);
            // console.log(distance);
            // console.log(hotline);
            // console.log(bus_type_id);
            // console.log(depart_time);
            // console.log(duration);

            await TripDaily.create({
              depart_station_id, arrive_station_id, name, code, price, distance,
              hotline, bus_type_id, depart_time, duration
            });

            cbd();

          }, (err) => { if (err) cbb(err); else cbb(); });
        }, (err) => { if (err) cba(err); else cba(); });
      }, (err) => { if (err) cb(err); else cb(); });
    }
  ], (err) => {
    if (err) return reject(err);
    return resolve();
  });
});
