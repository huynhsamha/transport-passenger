import request from 'request';
import config from '../config/config';

const fake = require('fakerator')();

const NUM_REPAIR_STATIONS = 10;
const DESCRIPTION = ['Excellent','Good','Normal','Medium'];

const generate = (id) => {
  const quatily = fake.number.random(1,5);
  let random_number = fake.number.random(0,DESCRIPTION.length-1);
  const description = DESCRIPTION[random_number];

  const repair_station = {
    authSecret: config.authenticationSecret,
    id,quatily,description
  };

  request.post('http://localhost:4200/api/v1/location/repair_station', {
    form: repair_station
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
};

const generateRepairStations = () => {
  for (let id = 1; id <= NUM_REPAIR_STATIONS; id++) generate(id);
};

generateRepairStations();
