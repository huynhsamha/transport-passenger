import Sequelize from 'sequelize';
import config from '../../config/db';

const { database, username, password } = config;

const sequelize = new Sequelize(
  database, username, password, config,
  { timezone: '+07:00' }
);

export default sequelize;
