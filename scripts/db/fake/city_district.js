import async from 'async';
import unique from 'unique-random';
import { City, District } from '../../../server/models';

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

const amountCity = 20;
const fakeCity = () => {
  const name = fake.address.city();
  let { latitude, longitude } = fake.address.geoLocation();
  latitude = Number(latitude.toFixed(5));
  longitude = Number(longitude.toFixed(5));
  const code = rand3();
  const website = `${name.split(' ').join('')}.com`;
  const tel_code = rand3();
  const zip_code = rand6();
  const area_code = rand3();

  return {
    name, latitude, longitude, code, website, tel_code, zip_code, area_code
  };
};

const fakeDistrict = (city_id) => {
  const name = fake.address.streetName();
  let { latitude, longitude } = fake.address.geoLocation();
  latitude = Number(latitude.toFixed(5));
  longitude = Number(longitude.toFixed(5));
  const code = rand3();
  const website = `${name.split(' ').join('')}.com`;
  const tel = fake.phone.number();

  return {
    name, latitude, longitude, code, website, tel, city_id
  };
};


export default new Promise((resolve, reject) => {
  const cities = [];
  for (let i = 0; i < amountCity; i++) cities.push(fakeCity());
  async.eachSeries(cities, (city, cb) => {
    City.create(city).then((city) => {
      console.log(`City ${city.id} created`);
      const amountDistrict = fake.random.number(2, 10);
      const districts = [];
      let center_district_id = -1;
      for (let i = 0; i < amountDistrict; i++) districts.push(fakeDistrict(city.id));
      async.eachSeries(districts, (district, cb2) => {
        District.create(district).then((district) => {
          console.log(`District ${district.id} created`);
          if (center_district_id == -1) center_district_id = district.id;
          return cb2();
        })
          .catch(err => cb2(err));
      }, (err) => {
        if (err) return cb(err);
        city.update({ center_district_id })
          .then((city) => {
            console.log(`City ${city.id} updated`);
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
