import async from 'async';
import unique from 'unique-random';
import { BusType, Bus } from '../../../server/models';

const fake = require('fakerator')();

const unirand3 = unique(100, 999);
const unirand6 = unique(100000, 999999);
const code3 = {};
const code6 = {};
const rand3 = () => {
  for (;;) {
    const r = unirand3();
    if (code3[r] == null) {
      code3[r] = 1;
      return r;
    }
  }
};
const rand6 = () => {
  for (;;) {
    const r = unirand6();
    if (code6[r] == null) {
      code6[r] = 1;
      return r;
    }
  }
};


const NUM_BUSTYPES = 10;
const BRAND = ['Huyndai', 'Toyota', 'Thaco', 'Mercedes Benz'];
const MODEL = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3'];
const SEATS = [4, 7, 12, 16, 24, 29, 35, 45, 50];
const MORE_INFO_BUS = [{
  l: 7080, w: 2035, h: 2780, m_n_l: 4300, m_al: 6175
}, {
  l: 12050, w: 2500, h: 3650, m_n_l: 12400, m_al: 16000
}, {
  l: 9500, w: 2420, h: 3350, m_n_l: 8900, m_al: 11900
}];

const amountBusType = 20;
const fakeBusType = () => {
  let random_number = fake.number.random(0, BRAND.length - 1);
  const brand = BRAND[random_number];
  random_number = fake.number.random(0, MODEL.length - 1);
  const model = MODEL[random_number];
  random_number = fake.number.random(0, SEATS.length - 1);
  const seats = SEATS[random_number];
  const speed = fake.number.random(100, 130);
  const capacity_fuel = fake.number.random(43, 400);
  random_number = fake.number.random(0, MORE_INFO_BUS.length - 1);
  const mass_no_load = MORE_INFO_BUS[random_number].m_n_l;
  const mass_all = MORE_INFO_BUS[random_number].m_al;
  const heigth = MORE_INFO_BUS[random_number].h;
  const width = MORE_INFO_BUS[random_number].w;
  const length = MORE_INFO_BUS[random_number].l;

  return {
    brand, model, seats, speed, capacity_fuel, mass_no_load, mass_all, heigth, width, length
  };
};

const fakeBus = (bus_type_id) => {
  const name = fake.address.streetName();
  let { latitude, longitude } = fake.address.geoLocation();
  latitude = Number(latitude.toFixed(5));
  longitude = Number(longitude.toFixed(5));
  const code = rand3();
  const website = `${name.split(' ').join('')}.com`;
  const tel = fake.phone.number();

  return {
    name, latitude, longitude, code, website, tel, bus_type_id
  };
};


export default new Promise((resolve, reject) => {
  const cities = [];
  for (let i = 0; i < amountBusType; i++) cities.push(fakeBusType());
  async.eachSeries(cities, (city, cb) => {
    BusType.create(city).then((city) => {
      console.log(`BusType ${city.id} created`);
      const amountDistrict = fake.random.number(2, 10);
      const districts = [];
      let center_district_id = -1;
      for (let i = 0; i < amountDistrict; i++) districts.push(fakeBus(city.id));
      async.eachSeries(districts, (district, cb2) => {
        Bus.create(district).then((district) => {
          console.log(`Bus ${district.id} created`);
          if (center_district_id == -1) center_district_id = district.id;
          return cb2();
        })
          .catch(err => cb2(err));
      }, (err) => {
        if (err) return cb(err);
        city.update({ center_district_id })
          .then((city) => {
            console.log(`BusType ${city.id} updated`);
            return cb();
          }).catch(err => cb(err));
      });
    })
      .catch(err => cb(err));
  }, (err) => {
    if (err) return reject(err);
    return resolve();
  });
});
