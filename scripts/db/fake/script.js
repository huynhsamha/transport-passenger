import async from 'async';
import sequelize from '../../../server/models';
import city_district from './city_district';

function run_script() {
  console.log('Starting fake data...');
  return city_district;
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
