import db from '../../config/oracle';

const { Model, DataTypes } = db;

class Employee extends Model {
}

/** Override properties */
Employee.tableName = 'EMPLOYEE';

Employee.attributes = {
  id: { type: DataTypes.NUMBER },
  ssn: { type: DataTypes.NUMBER },
  first_name: { type: DataTypes.STRING },
  second_name: { type: DataTypes.STRING },
  username: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  tel: { type: DataTypes.NUMBER },
  bank_account: { type: DataTypes.NUMBER },
  photo_url: { type: DataTypes.STRING },
  salary: { type: DataTypes.NUMBER },
  address: { type: DataTypes.STRING },
  join_date: { type: DataTypes.DATE },
  supervisor: { type: DataTypes.NUMBER },
  department_id: { type: DataTypes.NUMBER }
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
