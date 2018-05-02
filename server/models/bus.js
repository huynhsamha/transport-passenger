import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Bus = sequelize.define('Bus', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  bus_type_id: { type: Sequelize.INTEGER },
  registration: {
    type: Sequelize.STRING,
    unique: false
  },
  price: { type: Sequelize.FLOAT },
  status: { type: Sequelize.STRING },
  miles: { type: Sequelize.FLOAT },
  warranty_month: { type: Sequelize.INTEGER },
  warranty_miles: { type: Sequelize.FLOAT },
  description: { type: Sequelize.STRING }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});


export default Bus;
