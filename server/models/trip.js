import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Trip = sequelize.define('Trip', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  code: {
    type: Sequelize.STRING,
    unique: true
  },
  trip_daily_id: { type: Sequelize.INTEGER },
  depart_date: { type: Sequelize.DATE },
  bus_id: { type: Sequelize.INTEGER },
  driver_id: { type: Sequelize.INTEGER },
  assistant_id: { type: Sequelize.INTEGER },
  is_complete: { type: Sequelize.INTEGER }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


export default Trip;
