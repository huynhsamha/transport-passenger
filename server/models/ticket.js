import db from '../config/oracle';

const { Model, DataTypes } = db;

class Ticket extends Model{
}
/** Override properties */
Ticket.tableName = 'TICKET';

Ticket.attributes = {
  id: { type: DataTypes.NUMBER },
  code: { type: DataTypes.STRING },
  transaction_id: { type: DataTypes.NUMBER },
  trip_id: { type: DataTypes.STRING }
};

Ticket.getStmtSelectAll = Model.getStmtSelectAll(Ticket);
Ticket.getStmtSelectOneById = Model.getStmtSelectOneById(Ticket);
Ticket.getStmtDeleteOneById = Model.getStmtDeleteOneById(Ticket);

export default Ticket;
