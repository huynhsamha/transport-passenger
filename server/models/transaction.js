import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Transaction = sequelize.define('Transaction', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  code: {
    type: Sequelize.STRING,
    unique: true
  },
  customer_id: { type: Sequelize.INTEGER },
  seller_id: { type: Sequelize.INTEGER },
  account: { type: Sequelize.STRING },
  total_price: { type: Sequelize.FLOAT },
  payment_method: { type: Sequelize.STRING },
  status: { type: Sequelize.STRING }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


export default Transaction;
