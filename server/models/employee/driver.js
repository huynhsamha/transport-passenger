import Sequelize from 'sequelize';
import sequelize from '../../config/sequelize';

const Driver = sequelize.define('Driver', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  license_number: {
    type: Sequelize.INTEGER,
    unique: true
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});

export default Driver;
