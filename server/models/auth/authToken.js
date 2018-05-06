import Sequelize from 'sequelize';
import sequelize from '../../config/sequelize';

const AuthToken = sequelize.define('AuthToken', {
  token: {
    type: Sequelize.STRING(1024),
    allowNull: false,
    primaryKey: true
  },
  expire: {
    type: Sequelize.BIGINT,
    allowNull: false,
    comment: 'timestamp'
  }
}, {
  timestamps: null,
  underscored: true,
  underscoredAll: true
});


export default AuthToken;
