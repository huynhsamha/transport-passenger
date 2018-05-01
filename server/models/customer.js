import db from '../config/oracle';

const { Model, DataTypes } = db;

class Customer extends Model {
}
/** Override properties */
Customer.tableName = 'CUSTOMER';

Customer.attributes = {
  id: { type: DataTypes.NUMBER },
  ssn: { type: DataTypes.NUMBER },
  first_name: { type: DataTypes.STRING },
  last_name: { type: DataTypes.STRING },
  tel: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  feed_back: { type: DataTypes.STRING }
};

Customer.getStmtSelectAll = Model.getStmtSelectAll(Customer);
Customer.getStmtSelectOneById = Model.getStmtSelectOneById(Customer);
Customer.getStmtDeleteOneById = Model.getStmtDeleteOneById(Customer);

export default Customer;
