import Sequelize from 'sequelize';
import sequelize from '../../config/sequelize';

const BusStation = sequelize.define('BusStation', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  establish_date: { type: Sequelize.DATEONLY },
  owner_name: { type: Sequelize.STRING }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


export default BusStation;
