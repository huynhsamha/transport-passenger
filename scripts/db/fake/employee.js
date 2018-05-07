import async from 'async';
import unique from 'unique-random';

import { Office, District } from '../../../server/models';

const fake = require('fakerator')();

const unirand3 = unique(100, 999);
const code3 = {};
const rand3 = () => {
  for (;;) {
    const r = unirand3();
    if (code3[r] == null) {
      code3[r] = 1;
      return r;
    }
  }
};

const fakeEmployee = (role, supervisor_id) => {
  const ssn = fake.random.number(1000000000, 9999999999);
  const first_name = fake.names.firstName();
  const last_name = fake.names.lastName();
  const suffix = rand3(); // make unique username and email
  const username = fake.internet.userName(first_name, last_name + suffix);
  const email = fake.internet.email(first_name, last_name + suffix);
  const tel = fake.phone.number();
  const photo_url = fake.internet.avatar();
  const address = fake.address.street();
  const join_date = fake.date.past();

  return {
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
};

export default fakeEmployee;
