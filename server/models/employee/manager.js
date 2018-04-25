import db from '../../config/oracle';

const { Model, DataTypes } = db;

class Manager extends Model {
}

/** Override properties */
Manager.tableName = 'MANAGER';

Manager.attributes = {
  id: { type: DataTypes.NUMBER },
  start_date: { type: DataTypes.DATE }
};

Manager.getStmtDeleteOneById = Model.getStmtDeleteOneById(Manager);


export default Manager;
