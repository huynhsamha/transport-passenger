import request from 'request';
import config from '../../../config/config';

const fake = require('fakerator')();

const NUM_DISTRICTS = 5;

const generate = (id) => {
  const name = fake.address.streetName();
  let { latitude, longitude } = fake.address.geoLocation();
  latitude = Number(latitude.toFixed(5));
  longitude = Number(longitude.toFixed(5));
  const website = `${name.split(' ').join('')}.com`;
  const tel = fake.phone.number();
  const city_id = id;
  const district = {
    authSecret: config.authenticationSecret,
    id, name, latitude, longitude, website, tel, city_id
  };

  request.post('http://localhost:4200/api/v1/district', {
    form: district
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
};

const generateDistricts = () => {
  for (let id = 1; id <= NUM_DISTRICTS; id++) generate(id);
};

generateDistricts();
