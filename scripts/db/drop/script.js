import sequelize from '../../../server/config/sequelize';

// Default Schema for new database on Postgres SQL is public
sequelize.sync()
  .then(() => sequelize.dropSchema('public'))
  .then(() => {
    console.log('Drop schema public');
    return sequelize.createSchema('public');
  })
  .then(() => {
    console.log('Create schema public');
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
