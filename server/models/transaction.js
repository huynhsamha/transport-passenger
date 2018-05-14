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
  total_price: { type: Sequelize.FLOAT },
  payment_method: {
    type: Sequelize.STRING,
    comment: 'Cash, Visa, Master Card, PayPal, Bitcoin'
  },
  status: {
    type: Sequelize.STRING,
    comment: 'Approving, Processing, Complete'
  },
  timestamp: { type: Sequelize.DATE }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


export default Transaction;
