import request from 'request';
import config from '../../../config/config';

const fake = require('fakerator')();

const NUM_MANAGERS = 25;

const generate = (id) => {
  const start_date = fake.date.past();

  const manager = {
    authSecret: config.authenticationSecret,
    id, start_date
  };
  // console.log(employee);
  request.post('http://localhost:4200/api/v1/employee/role/manager', {
    form: manager
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
};

const generateManagers = () => {
  for (let id = 1; id <= NUM_MANAGERS; id++) generate(id);
};


generateManagers();
