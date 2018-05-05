import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const City = sequelize.define('City', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  code: {
    type: Sequelize.STRING,
    unique: true
  },
  latitude: { type: Sequelize.FLOAT },
  longitude: { type: Sequelize.FLOAT },
  website: { type: Sequelize.STRING },
  tel_code: {
    type: Sequelize.INTEGER,
    unique: true
  },
  zip_code: {
    type: Sequelize.INTEGER,
    unique: true
  },
  area_code: {
    type: Sequelize.INTEGER,
    unique: true
  },
  center_district_id: { type: Sequelize.INTEGER }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


export default City;
