import db from '../config/oracle';

const { Model, DataTypes } = db;

class District extends Model {
}

/** Override properties */
District.tableName = 'DISTRICT';

District.attributes = {
  id: { type: DataTypes.NUMBER },
  name: { type: DataTypes.STRING },
  latitude: { type: DataTypes.NUMBER },
  longitude: { type: DataTypes.NUMBER },
  website: { type: DataTypes.STRING },
  tel: { type: DataTypes.STRING },
  city_id: { type: DataTypes.NUMBER }
};

District.getStmtSelectAll = Model.getStmtSelectAll(District);
District.getStmtDeleteOneById = Model.getStmtDeleteOneById(District);
District.getStmtSelectOneById = Model.getStmtSelectOneById(District);

export default District;
