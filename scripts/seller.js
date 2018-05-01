import request from 'request';
import config from '../config/config';

const fake = require('fakerator')();

const NUM_SELLERS = 100;

const generate = (id) => {
  const exp_transaction = fake.random.number(0, 10);

  const seller = {
    authSecret: config.authenticationSecret,
    id, exp_transaction
  };

  request.post('http://localhost:4200/api/v1/employee/role/seller', {
    form: seller
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
};

const generateSellers = () => {
  for (let id = 301; id <= 400; id++) generate(id);
};

generateSellers();
