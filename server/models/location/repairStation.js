import Sequelize from 'sequelize';
import sequelize from '../../config/sequelize';

const RepairStation = sequelize.define('RepairStation', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  description: { type: Sequelize.STRING },
  quality: { type: Sequelize.INTEGER }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


export default RepairStation;
