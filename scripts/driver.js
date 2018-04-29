import request from 'request';
import config from '../config/config';

const fake = require('fakerator')();

const NUM_DRIVERS = 100;

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
  for (let id = 1; id <= NUM_DRIVERS; id++) generate(id);
};

generateDrivers();
