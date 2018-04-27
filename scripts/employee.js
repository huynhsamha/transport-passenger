import request from 'request';
import config from '../config/config';

const fake = require('fakerator')();

const roles = ['manager', 'driver', 'assistant', 'worker', 'seller'];
const NUM_MANAGERS = 10;

const generate = (id) => {
  const ssn = fake.random.number(1000000000, 9999999999);
  const first_name = fake.names.firstName();
  const last_name = fake.names.lastName();
  const username = fake.internet.userName(first_name, last_name);
  const email = fake.internet.email(first_name, last_name);
  const tel = fake.phone.number();
  const photo_url = fake.internet.avatar();
  const address = fake.address.street();
  const join_date = fake.date.past();
  const supervisor_id = id > NUM_MANAGERS ? fake.random.number(5) : null;

  let role;
  if (id <= NUM_MANAGERS) role = roles[0]; // manager
  else role = roles[fake.random.number(1, 4)]; // others

  const employee = {
    authSecret: config.authenticationSecret,
    id,
    ssn,
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
};

const generateManagers = () => {
  for (let id = 1; id <= NUM_MANAGERS; id++) generate(id);
};

const generateOthers = () => {
  for (let id = NUM_MANAGERS + 1; id <= 50; id++) generate(id);
};


// generateManagers();
generateOthers();
