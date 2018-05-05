import Sequelize from 'sequelize';
import sequelize from '../../config/sequelize';

const Seller = sequelize.define('Seller', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  exp_transaction: { type: Sequelize.INTEGER }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});

export default Seller;
