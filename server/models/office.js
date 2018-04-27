import db from '../config/oracle';
import crypto from 'crypto-js';
import lowerKeys from 'lowercase-keys-object';

const { Model, DataTypes } = db;

class Office extends Model {
}

/** Override properties */
Office.tableName = 'OFFICE';

Office.attributes = {
  id: { type: DataTypes.NUMBER },
  name: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  latitude: { type: DataTypes.NUMBER },
  longitude: { type: DataTypes.NUMBER },
  is_headquater: { type: DataTypes.NUMBER },
  district_id: { type: DataTypes.NUMBER },
  hotline: { type: DataTypes.STRING }
};

Office.getStmtSelectAll = Model.getStmtSelectAll(Office);
Office.getStmtSelectOneById = Model.getStmtSelectOneById(Office);
Office.getStmtDeleteOneById = Model.getStmtDeleteOneById(Office);


export default Office;
