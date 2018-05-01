import request from 'request';
import config from '../config/config';

const fake = require('fakerator')();

const NUM_CITYS = 5;

const generate = (id) => {
  const name = fake.address.city();
  let { latitude, longitude } = fake.address.geoLocation();
  latitude = Number(latitude.toFixed(5));
  longitude = Number(longitude.toFixed(5));
  const website = `${name.split(' ').join('')}.com`;
  const tel_code = fake.random.number(1, 100);
  const zip_code = fake.random.number(1, 100);
  const area_code = fake.random.number(1, 100);
  const center_district_id = id;

  const city = {
    authSecret: config.authenticationSecret,
    id, name, latitude, longitude, website, tel_code, zip_code, area_code, center_district_id
  };

  request.post('http://localhost:4200/api/v1/city', {
    form: city
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
};

const generateCitys = () => {
  for (let id = 1; id <= NUM_CITYS; id++) generate(id);
};

generateCitys();
