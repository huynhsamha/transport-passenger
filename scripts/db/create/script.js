import sequelize from '../../../server/models';

sequelize.sync({ force: true }).then(() => {
  console.log('Postgres is sync!');
  process.exit(0);
})
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
