import request from 'request';
import config from '../config/config';

const fake = require('fakerator')();

const roles = ['manager', 'driver', 'assistant', 'worker', 'seller'];

for (let id = 1; id < 6; id++) {
  const first_name = fake.names.firstName();
  const last_name = fake.names.lastName();
  const username = fake.internet.userName(first_name, last_name);
  const email = fake.internet.email(first_name, last_name);
  const tel = fake.phone.number();
  const photo_url = fake.internet.avatar();
  const address = fake.address.street();
  const join_date = fake.date.past();
  const supervisor_id = id > 5 ? fake.random.number(5) : null;
  const role = roles[fake.random.number(4)];

  const employee = {
    authSecret: config.authenticationSecret,
    id,
    ssn: 10000000000 + id,
    first_name,
    last_name,
    username,
    password: `${username}?`,
    email,
    tel,
    bank_account: Math.floor(Math.random() * 9999999999999),
    photo_url,
    salary: Math.random() * 1000000,
    address,
    join_date,
    supervisor_id,
    role
    // LICENSE_NUMBER: fake.misc.uuid(), // driver
    // START_DATE: fake.date.past(), // manager
    // EXP_TRANSACTION: fake.random.number(10000000) // seller
  };
  // console.log(employee);
  request.post('http://localhost:4200/api/v1/employee/', {
    form: employee
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
}

