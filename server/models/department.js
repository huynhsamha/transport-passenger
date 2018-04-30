import db from '../config/oracle';
import crypto from 'crypto-js';
import lowerKeys from 'lowercase-keys-object';

const { Model, DataTypes } = db;

class Department extends Model {
}

/** Override properties */
Department.tableName = 'DEPARTMENT';

Department.attributes = {
  id: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  manager_id: { type: DataTypes.NUMBER },
  office_id: { type: DataTypes.NUMBER }
};

Department.getStmtSelectAll = Model.getStmtSelectAll(Department);
Department.getStmtSelectOneById = Model.getStmtSelectOneById(Department);
Department.getStmtDeleteOneById = Model.getStmtDeleteOneById(Department);


export default Department;
