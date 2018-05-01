import request from 'request';
import config from '../config/config';

const fake = require('fakerator')();

const NUM_BUSTYPES = 10;
const BRAND = ['Huyndai', 'Toyota', 'Thaco', 'Mercedes Benz'];
const MODEL = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3'];
const SEATS = [4, 7, 12, 16, 24, 29, 35, 45, 50];
const MORE_INFO_BUS = [{
  l: 7080, w: 2035, h: 2780, m_n_l: 4300, m_al: 6175
}, {
  l: 12050, w: 2500, h: 3650, m_n_l: 12400, m_al: 16000
}, {
  l: 9500, w: 2420, h: 3350, m_n_l: 8900, m_al: 11900
}];
const generate = (id) => {
  let random_number = fake.number.random(0, BRAND.length - 1);
  const brand = BRAND[random_number];
  random_number = fake.number.random(0, MODEL.length - 1);
  const model = MODEL[random_number];
  random_number = fake.number.random(0, SEATS.length - 1);
  const seats = SEATS[random_number];
  const speed = fake.number.random(100, 130);
  const capacity_fuel = fake.number.random(43, 400);
  random_number = fake.number.random(0, MORE_INFO_BUS.length - 1);
  const mass_no_load = MORE_INFO_BUS[random_number].m_n_l;
  const mass_all = MORE_INFO_BUS[random_number].m_al;
  const heigth = MORE_INFO_BUS[random_number].h;
  const width = MORE_INFO_BUS[random_number].w;
  const length = MORE_INFO_BUS[random_number].l;

  const busType = {
    authSecret: config.authenticationSecret,
    id, brand, model, seats, speed, capacity_fuel, mass_no_load, mass_all, heigth, width, length
  };

  request.post('http://localhost:4200/api/v1/busType', {
    form: busType
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
};

const generateBustypes = () => {
  for (let id = 1; id <= NUM_BUSTYPES; id++) generate(id);
};

generateBustypes();
