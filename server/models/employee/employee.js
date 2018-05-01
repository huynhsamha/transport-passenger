import db from '../../config/oracle';
import crypto from 'crypto-js';
import lowerKeys from 'lowercase-keys-object';

const { Model, DataTypes } = db;

class Employee extends Model {
  constructor(data) {
    super(data);
    if (!data) return;
    data = lowerKeys(data);
    if (data.username && data.password) {
      this.password = Employee.hashPassword(data.username, data.password);
    }
  }
}

/** Override properties */
Employee.tableName = 'EMPLOYEE';

Employee.attributes = {
  id: { type: DataTypes.NUMBER },
  ssn: { type: DataTypes.NUMBER },
  first_name: { type: DataTypes.STRING },
  last_name: { type: DataTypes.STRING },
  username: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  tel: { type: DataTypes.STRING },
  bank_account: { type: DataTypes.NUMBER },
  photo_url: { type: DataTypes.STRING },
  salary: { type: DataTypes.NUMBER },
  address: { type: DataTypes.STRING },
  join_date: { type: DataTypes.DATE },
  supervisor_id: { type: DataTypes.NUMBER },
  department_id: { type: DataTypes.NUMBER },
  role: { type: DataTypes.STRING }
};

Employee.getStmtSelectAll = Model.getStmtSelectAll(Employee);
Employee.getStmtDeleteOneById = Model.getStmtDeleteOneById(Employee);

Employee.hashPassword = (username, password) =>
  crypto.AES.encrypt(password, username).toString();

Employee.authenticate = (username, encryptPassword, tryPassword) => {
  var bytes = crypto.AES.decrypt(encryptPassword, username);
  var decryptPassword = bytes.toString(crypto.enc.Utf8);
  return tryPassword == decryptPassword;
};

export default Employee;
