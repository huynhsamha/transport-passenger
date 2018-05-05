import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Customer = sequelize.define('Customer', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ssn: {
    type: Sequelize.BIGINT,
    unique: true
  },
  first_name: { type: Sequelize.STRING },
  last_name: { type: Sequelize.STRING },
  tel: { type: Sequelize.STRING },
  address: { type: Sequelize.STRING },
  feed_back: { type: Sequelize.STRING }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


export default Customer;
