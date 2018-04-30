import request from 'request';
import config from '../config/config';

const fake = require('fakerator')();

const NUM_DEPARTMENTS = 25;
const TYPE = ['Human Resource','Business','Financial','Shipping','Equipment'];
const NAME = ['Nhan Su','Kinh Doanh','Tai Chinh','Van Chuyen','Thiet Bi'];

const generate = (id,type,name,manager_id,office_id) => {

  const department = {
    authSecret: config.authenticationSecret,
    id,type,name,manager_id,office_id
  };

  request.post('http://localhost:4200/api/v1/department', {
    form: department
  }, (err, res, body) => {
    if (err) {
      console.log(err);
    }
    console.log(`${id} is OK`);
  });
};

const generateDepartments = () => {
  let id = 1;
  for(let i = 1; i <= 5 ;++i){
    for (let j = 0; j < 5; j++) {
      generate(id,TYPE[j],NAME[j],id,i);
      id++;
    }
  }
};

generateDepartments();
