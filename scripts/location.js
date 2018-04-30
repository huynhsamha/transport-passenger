import request from 'request';
import config from '../config/config';

const fake = require('fakerator')();

const NUM_LOCATIONS = 40;

const generate = (id) => {
  const name = fake.address.city();
  const address = fake.address.street();
  let { latitude, longitude } = fake.address.geoLocation();
  latitude = Number(latitude.toFixed(5));
  longitude = Number(longitude.toFixed(5));
  const open_time = fake.data.past();
  let date_temp = new Date(open_time);
  date_temp.setHours(date1.getHours()+8);
  let close_time = date_temp;
  const tel = fake.phone.number();
  const district_id = fake.random.number(1,10);

  const location = {
    authSecret: config.authenticationSecret,
    id,name,address,latitude,longitude,open_time,close_time,tel,district_id
  };

  request.post('http://localhost:4200/api/v1/location', {
    form: location
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
};

const generateLocations = () => {
  for (let id = 1; id <= NUM_LOCATIONS; id++) generate(id);
};

generateLocations();
