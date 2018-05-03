import request from 'request';
import config from '../../../config/config';

const fake = require('fakerator')();

const NUM_DRIVERS = 10;

const generate = (id) => {
  const license_number = fake.misc.uuid();

  const driver = {
    authSecret: config.authenticationSecret,
    id, license_number
  };

  request.post('http://localhost:4200/api/v1/employee/role/driver', {
    form: driver
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
};

const generateDrivers = () => {
  for (let id = 101; id <= 200; id++) generate(id);
};

generateDrivers();
