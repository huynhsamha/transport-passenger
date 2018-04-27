import db from '../config/oracle';

const { Model, DataTypes } = db;

class Transaction extends Model{
}
/** Override properties */
Transaction.tableName = 'TRANSACTION';

Transaction.attributes = {
  id: { type: DataTypes.NUMBER },
  code: { type: DataTypes.STRING },
  time_stamp: { type: DataTypes.TIMESTAMP },
  customer_id: { type: DataTypes.NUMBER },
  seller_id: { type: DataTypes.NUMBER },
  account: { type: DataTypes.STRING },
  total_price: { type: DataTypes.NUMBER },
  payment_method: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING }
};

Transaction.getStmtSelectAll = Model.getStmtSelectAll(Transaction);
Transaction.getStmtSelectOneById = Model.getStmtSelectOneById(Transaction);
Transaction.getStmtDeleteOneById = Model.getStmtDeleteOneById(Transaction);

export default Transaction;
