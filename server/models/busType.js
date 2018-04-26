import db from '../config/oracle';

const { Model, DataTypes } = db;

class BusType extends Model {
}

/** Override properties */
BusType.tableName = 'BUS_TYPE';

BusType.attributes = {
  id: { type: DataTypes.NUMBER },
  brand: { type: DataTypes.STRING },
  model: { type: DataTypes.STRING },
  seats: { type: DataTypes.NUMBER },
  speed: { type: DataTypes.NUMBER },
  capacity_fuel: { type: DataTypes.NUMBER },
  width: { type: DataTypes.NUMBER },
  length: { type: DataTypes.NUMBER },
  height: { type: DataTypes.NUMBER },
  mass_all: { type: DataTypes.NUMBER },
  mass_no_load: { type: DataTypes.NUMBER }
};

BusType.getStmtSelectAll = Model.getStmtSelectAll(BusType);
BusType.getStmtSelectOneById = Model.getStmtSelectOneById(BusType);
BusType.getStmtDeleteOneById = Model.getStmtDeleteOneById(BusType);

export default BusType;