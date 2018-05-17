import Sequelize from 'sequelize';
import sequelize from '../../config/sequelize';

const Manager = sequelize.define('Manager', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  start_date: { type: Sequelize.DATE }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});

export default Manager;
