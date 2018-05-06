import Sequelize from 'sequelize';
import sequelize from '../../config/sequelize';

const ResetPasswordToken = sequelize.define('ResetPasswordToken', {
  token: {
    type: Sequelize.STRING(1024),
    allowNull: false,
    primaryKey: true
  },
  expire: {
    type: Sequelize.BIGINT,
    allowNull: false,
    comment: 'timestamp'
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: null,
  underscored: true,
  underscoredAll: true
});


export default ResetPasswordToken;
