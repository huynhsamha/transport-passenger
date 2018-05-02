require('dotenv').config();

const Sequelize = require('sequelize');
const config = require('../config/db');

const { database, username, password } = config;

const sequelize = new Sequelize(database, username, password, config, { timezone: '+07:00' });

// Default Schema for new database on Postgres SQL is public

sequelize.sync()
  .then(() => sequelize.dropSchema('public'))
  .then(() => {
    console.log('Drop schema public');
    return sequelize.createSchema('public');
  }).then(() => {
    console.log('Create schema public');
  })
  .catch(err => console.log(err));
