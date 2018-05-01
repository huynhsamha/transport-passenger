import db from '../config/oracle';

const { Model, DataTypes } = db;

class City extends Model {
}

/** Override properties */
City.tableName = 'CITY';

City.attributes = {
  id: { type: DataTypes.NUMBER },
  name: { type: DataTypes.STRING },
  latitude: { type: DataTypes.NUMBER },
  longitude: { type: DataTypes.NUMBER },
  website: { type: DataTypes.STRING },
  tel_code: { type: DataTypes.NUMBER },
  zip_code: { type: DataTypes.NUMBER },
  area_code: { type: DataTypes.NUMBER },
  center_district_id: { type: DataTypes.NUMBER }
};

City.getStmtSelectAll = Model.getStmtSelectAll(City);
City.getStmtDeleteOneById = Model.getStmtDeleteOneById(City);
City.getStmtSelectOneById = Model.getStmtSelectOneById(City);

export default City;
