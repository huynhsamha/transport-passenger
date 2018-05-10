import Sequelize from 'sequelize';
import sequelize from '../../config/sequelize';

import crypto from 'crypto-js';

const Employee = sequelize.define('Employee', {
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
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: { type: Sequelize.STRING(1024) },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  tel: { type: Sequelize.STRING },
  bank_account: { type: Sequelize.BIGINT },
  photo_url: { type: Sequelize.STRING },
  salary: { type: Sequelize.FLOAT },
  address: { type: Sequelize.STRING },
  join_date: { type: Sequelize.DATE },
  supervisor_id: { type: Sequelize.INTEGER },
  department_id: { type: Sequelize.INTEGER },
  role: {
    type: Sequelize.STRING,
    comment: 'manager, driver, seller, assistant'
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});

// dont allow to use arrow function for instance methods
Employee.prototype.hashPassword = function (password) {
  return crypto.AES.encrypt(password, this.username).toString();
};

Employee.prototype.authenticate = function (password) {
  var bytes = crypto.AES.decrypt(this.password, this.username);
  var decryptPassword = bytes.toString(crypto.enc.Utf8);
  return password == decryptPassword;
};

Employee.beforeCreate((user) => {
  user.password = user.hashPassword(user.password);
});

// Employee.beforeUpdate((user) => {
//   user.password = user.hashPassword(user.password);
// });

export default Employee;
