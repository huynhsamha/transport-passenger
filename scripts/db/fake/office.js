import request from 'request';
import config from '../../../config/config';

const fake = require('fakerator')();

const NUM_OFFICES = 5;

const generate = (id) => {
  const name = fake.company.name();
  const address = fake.address.street();
  let { latitude, longitude } = fake.address.geoLocation();
  latitude = Number(latitude.toFixed(5));
  longitude = Number(longitude.toFixed(5));
  const is_headquater = id == 1 ? 1 : null;
  const district_id = id;

  const form = {
    authSecret: config.authenticationSecret,
    id,
    name,
    address,
    latitude,
    longitude,
    is_headquater,
    district_id
  };
  console.log(form);
  request.post('http://localhost:4200/api/v1/office/', { form }, (err, res, body) => {
    if (err) console.log(err);
    else console.log(`${id} is OK`);
  });
};

for (let id = 1; id <= NUM_OFFICES; id++) generate(id);
