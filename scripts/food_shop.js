import request from 'request';
import config from '../config/config';

const fake = require('fakerator')();

const NUM_FOOD_SHOPS = 10;
const DESCRIPTION = ['Excellent','Good','Normal','Medium'];

const generate = (id) => {
  const capacity = fake.random.number(100,150);
  const quality = fake.random.number(1,5);
  let random_number = fake.number.random(0,DESCRIPTION.length-1);
  const description = DESCRIPTION[random_number];

  const food_shop = {
    authSecret: config.authenticationSecret,
    id, capacity,quality,description
  };
  // console.log(employee);
  request.post('http://localhost:4200/api/v1/location/food_shop', {
    form: food_shop
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
};

const generateFoodShops = () => {
  for (let id = 21; id <= 30; id++) generate(id);
};


generateFoodShops();
