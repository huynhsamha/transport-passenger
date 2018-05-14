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
  duration: { type: Sequelize.INTEGER, comment: 'by minutes' },
  arrive_time: { type: Sequelize.TIME },
  price: { type: Sequelize.FLOAT },
  distance: { type: Sequelize.FLOAT },
  hotline: { type: Sequelize.STRING },
  bus_type_id: { type: Sequelize.INTEGER }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


TripDaily.beforeCreate((obj) => {
  const depart_time = new Date();
  depart_time.setHours(obj.depart_time.slice(0, 2));
  depart_time.setMinutes(obj.depart_time.slice(3, 5));
  let arrive_time = new Date(depart_time.getTime() + obj.duration * 60000);
  arrive_time = arrive_time.toTimeString().slice(0, 9);
  obj.arrive_time = arrive_time;
});

export default TripDaily;
