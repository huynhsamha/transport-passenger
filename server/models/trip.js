import db from '../config/oracle';

const { Model, DataTypes } = db;

class Trip extends Model {
}

/** Override properties */
Trip.tableName = 'TRIP';

Trip.attributes = {
  id: { type: DataTypes.NUMBER },
  trip_daily_id: { type: DataTypes.NUMBER },
  depart_date: { type: DataTypes.DATE },
  bus_id: { type: DataTypes.NUMBER },
  driver_id: { type: DataTypes.NUMBER },
  assistant_id: { type: DataTypes.NUMBER },
  is_complete: { type: DataTypes.NUMBER }
};

Trip.getStmtSelectAll = Model.getStmtSelectAll(Trip);
Trip.getStmtDeleteOneById = Model.getStmtDeleteOneById(Trip);


export default Trip;
