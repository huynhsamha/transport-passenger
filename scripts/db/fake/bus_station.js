import request from 'request';
import config from '../../../config/config';

const fake = require('fakerator')();

const NUM_BUS_STATIONS = 10;

const generate = (id) => {
  const establish_date = fake.date.past();
  const owner_name = fake.names.name();

  const bus_station = {
    authSecret: config.authenticationSecret,
    id, establish_date, owner_name
  };

  request.post('http://localhost:4200/api/v1/location/bus_station', {
    form: bus_station
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
};

const generateBusStations = () => {
  for (let id = 31; id <= 40; id++) generate(id);
};

generateBusStations();
