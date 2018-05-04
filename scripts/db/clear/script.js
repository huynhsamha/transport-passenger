import sequelize from '../../../server/models';

sequelize.sync().then(() =>
  sequelize.truncate({ force: true, cascade: true }))
  .then(() => {
    console.log('Truncate all tables');
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
