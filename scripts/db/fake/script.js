import async from 'async';
import sequelize from '../../../server/models';
import city_district from './city_district';
import bustype_bus from './bustype_bus';
import stations from './stations';
import office from './office';
import manager from './manager';
import other_employee from './other_employee';
import department from './department';
import customer from './customer';
import tripDaily from './tripDaily';
import upd_dept_mgr from './upd_dept_mgr';
import upd_emp_dept from './upd_emp_dept';

async function run_script() {
  console.log('Starting fake data...');
  try {
    // await city_district();
    // await bustype_bus();
    // await stations();
    // await office();
    // await manager();
    // await other_employee();
    // await department();
    // await customer();
    // await tripDaily();
    // await upd_dept_mgr();
    // await upd_emp_dept();

    return Promise.resolve();

  } catch (error) {
    return Promise.reject(error);
  }
}

sequelize.sync().then(() => {
  console.log('Postgres is sync!');
  return run_script();
})
  .then(() => {
    console.log('Fake data succesfully');
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
