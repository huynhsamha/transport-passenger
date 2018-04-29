import request from 'request';
import config from '../config/config';

const fake = require('fakerator')();

const NUM_BUSES = 10;
const STATUS = ['New','Old','Intermidate'];
const DESCRIPTION = ['Enduring','High Speed'];

const generate = (id) => {
  const bus_type_id = fake.number.random(1,10);
  const registration = fake.misc.uuid();
  const price = fake.number.random(1000000000,2000000000);
  let random_number = fake.number.random(0,STATUS.length-1);
  const status = STATUS[random_number];
  const miles = fake.random.number(50,100);
  const buy_date = fake.date.past();
  const warranty_month = fake.number.random(2,6);
  const warranty_miles = fake.number.random(10,20);
  random_number = fake.number.random(0,DESCRIPTION.length-1);
  const description = DESCRIPTION[random_number];

  const bus = {
    authSecret: config.authenticationSecret,
    id,bus_type_id,registration,price,status,miles,buy_date,warranty_month,warranty_miles,description
  };

  request.post('http://localhost:4200/api/v1/bus', {
    form: bus
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
};

const generateBuses = () => {
  for (let id = 1; id <= NUM_BUSES; id++) generate(id);
};

generateBuses();
