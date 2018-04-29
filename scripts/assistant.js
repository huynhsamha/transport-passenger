import request from 'request';
import config from '../config/config';

const fake = require('fakerator')();

const NUM_ASSISTANTS = 100;
const TYPE = ['Ticket Collector','Roustabout','Tour Guide']

const generate = (id) {
  let random_number = fake.random.number(0,TYPE.length-1);
  const type = TYPE[random_number];

  const assistant = {
    authSecret: config.authenticationSecret,
    id, type
  };

  request.post('http://localhost:4200/api/v1/employee/role/assistant', {
    form: assistant
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
};

const generateAssistants = () => {
  for (let id = 21; id <= 30; id++) generate(id);
};

generateAssistants();
