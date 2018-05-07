import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Ticket = sequelize.define('Ticket', {
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
  transaction_id: { type: Sequelize.INTEGER },
  trip_id: { type: Sequelize.INTEGER }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


export default Ticket;
