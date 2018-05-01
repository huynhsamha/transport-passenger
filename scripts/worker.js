import request from 'request';
import config from '../config/config';

const fake = require('fakerator')();

const NUM_WORKERS = 100;

const Type_Job = ['Typer', 'Secretary', 'Sanitation', 'IT'];

const generate = (id) => {
  const random_number = fake.random.number(0, Type_Job.length - 1);
  const job_type = Type_Job[random_number];

  const worker = {
    authSecret: config.authenticationSecret,
    id, job_type
  };
  request.post('http://localhost:4200/api/v1/employee/role/worker', {
    form: worker
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
};

const generateWorkers = () => {
  for (let id = 26; id <= 100; id++) generate(id);
};


generateWorkers();
