import { Location } from '../../../server/models';

const fake = require('fakerator')();

const AMOUNT = 40;

const generate = (id) => {
  const name = fake.address.city();
  const address = fake.address.street();
  let { latitude, longitude } = fake.address.geoLocation();
  latitude = Number(latitude.toFixed(5));
  longitude = Number(longitude.toFixed(5));
  const open_time = fake.data.past();
  const date_temp = new Date(open_time);
  date_temp.setHours(date_temp.getHours() + 8);
  const close_time = date_temp;
  const tel = fake.phone.number();
  const district_id = fake.random.number(1, 10);

  const data = {
    id, name, address, latitude, longitude, open_time, close_time, tel, district_id
  };

  return Location.create(data);
};

export default new Promise((resolve, reject) => {
  let cnt = 0;
  for (let i = 0; i < AMOUNT; i++) {
    generate(i).then(() => {
      if (++cnt == AMOUNT) {
        return resolve();
      }
    })
      .catch(err => reject(err));
  }
});
