import db from '../config/oracle';

const { Model, DataTypes } = db;

class Bus extends Model {
}

/** Override properties */
Bus.tableName = 'BUS';

Bus.attributes = {
  id: { type: DataTypes.NUMBER },
  bus_type_id: { type: DataTypes.NUMBER },
  registration: { type: DataTypes.STRING },
  price: { type: DataTypes.NUMBER },
  status: { type: DataTypes.STRING },
  miles: { type: DataTypes.NUMBER },
  warranty_month: { type: DataTypes.NUMBER },
  warranty_miles: { type: DataTypes.NUMBER },
  description: { type: DataTypes.STRING }
};

Bus.getStmtSelectAll = Model.getStmtSelectAll(Bus);
Bus.getStmtDeleteOneById = Model.getStmtDeleteOneById(Bus);


export default Bus;
