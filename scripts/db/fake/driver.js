import { Driver } from '../../../server/models';

const fake = require('fakerator')();

const AMOUNT = 5;

const generate = (id) => {
  const license_number = fake.misc.uuid();
  const data = {
    license_number
  };

  return Driver.create(data);
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
