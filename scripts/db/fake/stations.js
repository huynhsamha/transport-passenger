import async from 'async';
import unique from 'unique-random';
import { Location, BusStation, RepairStation, District } from '../../../server/models';

const fake = require('fakerator')();

const locTypes = ['bus', 'repair'];
const fakeLocation = (district_id) => {
  const name = fake.address.city();
  const address = fake.address.street();
  let { latitude, longitude } = fake.address.geoLocation();
  latitude = Number(latitude.toFixed(5));
  longitude = Number(longitude.toFixed(5));
  const open_time = fake.date.past();
  const date_temp = new Date(open_time);
  date_temp.setHours(date_temp.getHours() + 8);
  const close_time = date_temp;
  const tel = fake.phone.number();
  const type = locTypes[fake.random.number(0, 1)];

  return {
    name, address, latitude, longitude, open_time, close_time, tel, district_id, type
  };
};

const fakeBusStation = (id) => {
  const establish_date = fake.date.past();
  const owner_name = fake.names.name();

  return {
    id, establish_date, owner_name
  };
};

const DESCRIPTION = ['Excellent', 'Good', 'Normal', 'Medium'];
const fakeRepairStation = (id) => {
  const quatily = fake.random.number(1, 5);
  const random_number = fake.random.number(0, DESCRIPTION.length - 1);
  const description = DESCRIPTION[random_number];

  return {
    id, quatily, description
  };
};


export default () => new Promise((resolve, reject) => {
  District.findAll().then((districts) => {
    async.eachSeries(districts, (district, cb) => {
      if (district.id % 5 > 0) return cb();
      const locations = [];
      const amountLocation = fake.random.number(2, 5);
      for (let i = 0; i < amountLocation; i++) locations.push(fakeLocation(district.id));
      async.eachSeries(locations, (location, cb2) => {
        Location.create(location).then((location) => {
          console.log(`Location ${location.id} created`);
          if (location.type == 'bus') {
            BusStation.create(fakeBusStation(location.id)).then(() => cb2())
              .catch(err => cb2(err));
          } else {
            RepairStation.create(fakeRepairStation(location.id)).then(() => cb2())
              .catch(err => cb2(err));
          }
        }).catch(err => cb2(err));
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
