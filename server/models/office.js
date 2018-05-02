import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Office = sequelize.define('Office', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: { type: Sequelize.STRING },
  code: { type: Sequelize.STRING },
  address: { type: Sequelize.STRING },
  latitude: { type: Sequelize.FLOAT },
  longitude: { type: Sequelize.FLOAT },
  is_headquater: { type: Sequelize.INTEGER },
  district_id: { type: Sequelize.INTEGER },
  hotline: { type: Sequelize.STRING }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


export default Office;
