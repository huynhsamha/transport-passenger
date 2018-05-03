import Sequelize from 'sequelize';
import sequelize from '../../config/sequelize';

const Location = sequelize.define('Location', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: { type: Sequelize.STRING },
  latitude: { type: Sequelize.FLOAT },
  longitude: { type: Sequelize.FLOAT },
  address: { type: Sequelize.STRING },
  tel: { type: Sequelize.STRING },
  open_time: { type: Sequelize.TIME },
  close_time: { type: Sequelize.TIME },
  district_id: { type: Sequelize.INTEGER }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


export default Location;
