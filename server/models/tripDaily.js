import db from '../config/oracle';

const { Model, DataTypes } = db;

class TripDaily extends Model {
}

/** Override properties */
TripDaily.tableName = 'TRIP_DAILY';

TripDaily.attributes = {
  id: { type: DataTypes.NUMBER },
  name: { type: DataTypes.STRING },
  depart_station_id: { type: DataTypes.NUMBER },
  arrive_station_id: { type: DataTypes.NUMBER },
  depart_time: { type: DataTypes.TIMESTAMP },
  arrive_time: { type: DataTypes.TIMESTAMP },
  duration: { type: DataTypes.NUMBER },
  price: { type: DataTypes.NUMBER },
  distance: { type: DataTypes.NUMBER },
  hotline: { type: DataTypes.NUMBER },
  bus_type_id: { type: DataTypes.NUMBER }
};

TripDaily.getStmtSelectAll = Model.getStmtSelectAll(TripDaily);
TripDaily.getStmtSelectOneById = Model.getStmtSelectOneById(TripDaily);
TripDaily.getStmtDeleteOneById = Model.getStmtDeleteOneById(TripDaily);


export default TripDaily;
