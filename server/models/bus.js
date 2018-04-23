import db from '../config/oracle';

const { Model, DataTypes } = db;

class Bus extends Model {
}

/** Override properties */
Bus.tableName = 'BUS';

Bus.attributes = {
  id: { type: DataTypes.STRING },
  bus_type_id: { type: DataTypes.STRING },
  registration: { type: DataTypes.STRING },
  price: { type: DataTypes.NUMBER },
  status: { type: DataTypes.STRING },
  miles: { type: DataTypes.NUMBER },
  warranty_month: { type: DataTypes.NUMBER },
  warranty_miles: { type: DataTypes.NUMBER },
  description: { type: DataTypes.STRING }
};


export default Bus;
