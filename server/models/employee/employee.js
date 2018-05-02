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
    type: Sequelize.INTEGER,
    unique: true
  },
  first_name: { type: Sequelize.STRING },
  last_name: { type: Sequelize.STRING },
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: { type: Sequelize.STRING },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  tel: { type: Sequelize.STRING },
  bank_account: { type: Sequelize.INTEGER },
  photo_url: {
    type: Sequelize.STRING,
    unique: true
  },
  salary: { type: Sequelize.FLOAT },
  address: { type: Sequelize.STRING },
  join_date: { type: Sequelize.DATE },
  supervisor_id: { type: Sequelize.INTEGER },
  department_id: { type: Sequelize.INTEGER },
  role: { type: Sequelize.STRING }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  underscored: true,
  underscoredAll: true
});

Employee.hashPassword = (username, password) =>
  crypto.AES.encrypt(password, username).toString();

Employee.authenticate = (username, encryptPassword, tryPassword) => {
  var bytes = crypto.AES.decrypt(encryptPassword, username);
  var decryptPassword = bytes.toString(crypto.enc.Utf8);
  return tryPassword == decryptPassword;
};


export default Employee;
