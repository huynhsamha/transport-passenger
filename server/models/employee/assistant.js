import Sequelize from 'sequelize';
import sequelize from '../../config/sequelize';

const Assistant = sequelize.define('Assistant', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  type: { type: Sequelize.STRING }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});

export default Assistant;
