import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Department = sequelize.define('Department', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  type: { type: Sequelize.STRING },
  name: { type: Sequelize.STRING },
  manager_id: { type: Sequelize.INTEGER },
  office_id: { type: Sequelize.INTEGER }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


export default Department;
