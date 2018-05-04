import async from 'async';
import unique from 'unique-random';
import { BusType, Bus } from '../../../server/models';

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

const NUM_BUSES = 10;
const STATUS = ['New', 'Old', 'Intermidate'];
const DESCRIPTION = ['Enduring', 'High Speed'];

const amountBusType = 20;
const fakeBusType = () => {
  let random_number = fake.random.number(0, BRAND.length - 1);
  const brand = BRAND[random_number];
  random_number = fake.random.number(0, MODEL.length - 1);
  const model = MODEL[random_number];
  random_number = fake.random.number(0, SEATS.length - 1);
  const seats = SEATS[random_number];
  const speed = fake.random.number(10, 20) * 10;
  const capacity_fuel = fake.random.number(43, 400);
  random_number = fake.random.number(0, MORE_INFO_BUS.length - 1);
  const mass_no_load = MORE_INFO_BUS[random_number].m_n_l;
  const mass_all = MORE_INFO_BUS[random_number].m_al;
  const heigth = MORE_INFO_BUS[random_number].h;
  const width = MORE_INFO_BUS[random_number].w;
  const length = MORE_INFO_BUS[random_number].l;

  return {
    brand, model, seats, speed, capacity_fuel, mass_no_load, mass_all, heigth, width, length
  };
};

const fakeBus = (bus_type_id) => {
  const registration = fake.misc.uuid();
  const price = fake.random.number(1000000000, 2000000000);
  let random_number = fake.random.number(0, STATUS.length - 1);
  const status = STATUS[random_number];
  const miles = fake.random.number(50, 100);
  const buy_date = fake.date.past();
  const warranty_month = fake.random.number(2, 6);
  const warranty_miles = fake.random.number(10, 20);
  random_number = fake.random.number(0, DESCRIPTION.length - 1);
  const description = DESCRIPTION[random_number];

  return {
    bus_type_id, registration, price, status, miles, buy_date, warranty_month, warranty_miles, description
  };
};


export default new Promise((resolve, reject) => {
  const busTypes = [];
  for (let i = 0; i < amountBusType; i++) busTypes.push(fakeBusType());
  async.eachSeries(busTypes, (busType, cb) => {
    BusType.create(busType).then((busType) => {
      console.log(`BusType ${busType.id} created`);
      const amountBus = fake.random.number(10, 20);
      const buses = [];
      for (let i = 0; i < amountBus; i++) buses.push(fakeBus(busType.id));
      async.eachSeries(buses, (bus, cb2) => {
        Bus.create(bus).then((bus) => {
          console.log(`Bus ${bus.id} created`);
          return cb2();
        })
          .catch(err => cb2(err));
      }, (err) => {
        if (err) return cb(err);
        return cb();
      });
    })
      .catch(err => cb(err));
  }, (err) => {
    if (err) return reject(err);
    return resolve();
  });
});
