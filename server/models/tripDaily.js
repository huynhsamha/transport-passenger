import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const TripDaily = sequelize.define('TripDaily', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: { type: Sequelize.STRING },
  code: {
    type: Sequelize.STRING,
    unique: true
  },
  depart_station_id: { type: Sequelize.INTEGER },
  arrive_station_id: { type: Sequelize.INTEGER },
  depart_time: { type: Sequelize.TIME },
  arrive_time: { type: Sequelize.TIME },
  duration: { type: Sequelize.INTEGER },
  price: { type: Sequelize.FLOAT },
  distance: { type: Sequelize.FLOAT },
  hotline: { type: Sequelize.INTEGER },
  bus_type_id: { type: Sequelize.INTEGER }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


export default TripDaily;
