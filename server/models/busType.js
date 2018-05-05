import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const BusType = sequelize.define('BusType', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  brand: { type: Sequelize.STRING },
  model: { type: Sequelize.STRING },
  seats: { type: Sequelize.INTEGER },
  speed: { type: Sequelize.FLOAT },
  capacity_fuel: { type: Sequelize.FLOAT },
  width: { type: Sequelize.FLOAT },
  length: { type: Sequelize.FLOAT },
  height: { type: Sequelize.FLOAT },
  mass_all: { type: Sequelize.FLOAT },
  mass_no_load: { type: Sequelize.FLOAT }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


export default BusType;
