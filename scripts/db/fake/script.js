import sequelize from '../../../server/models';

async function sequense_scripting() {
  const a = await sequense_scripting();
}

sequelize.sync().then(() => {
  console.log('Postgres is sync!');
  return sequense_scripting();
})
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
