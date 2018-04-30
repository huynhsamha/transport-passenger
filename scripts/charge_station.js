import request from 'request';
import config from '../config/config';

const fake = require('fakerator')();

const NUM_CHARGE_STATIONS = 10;

const generate = (id) => {
  const establish_date = fake.date.past();
  const owner_name = fake.names.name();
  const date_apply = establish_date;
  let date_end = new Date(establish_date);
  date_end.setFullYear(date_end.getFullYear()+5);
  const fee_per_bus = fake.random.number(100000,200000);

  const charge_station = {
    authSecret: config.authenticationSecret,
    id,establish_date,owner_name,date_apply,date_end,fee_per_bus
  };

  request.post('http://localhost:4200/api/v1/location/charge_station', {
    form: charge_station
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
};

const generateChargeStations = () => {
  for (let id = 11; id <= 20; id++) generate(id);
};

generateChargeStations();
