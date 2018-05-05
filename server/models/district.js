import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const District = sequelize.define('District', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  code: {
    type: Sequelize.STRING,
    unique: true
  },
  latitude: { type: Sequelize.FLOAT },
  longitude: { type: Sequelize.FLOAT },
  website: { type: Sequelize.STRING },
  tel: { type: Sequelize.STRING },
  city_id: { type: Sequelize.INTEGER }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


export default District;
