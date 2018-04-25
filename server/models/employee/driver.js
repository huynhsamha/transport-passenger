import db from '../../config/oracle';

const { Model, DataTypes } = db;

class Driver extends Model {
}

/** Override properties */
Driver.tableName = 'DRIVER';

Driver.attributes = {
  id: { type: DataTypes.NUMBER },
  licence_number: { type: DataTypes.NUMBER }
};

Driver.getStmtDeleteOneById = Model.getStmtDeleteOneById(Driver);


export default Driver;
