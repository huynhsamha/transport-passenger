import Sequelize from 'sequelize';
import sequelize from '../../config/sequelize';

const Driver = sequelize.define('Driver', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  license_number: {
    type: Sequelize.STRING,
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
