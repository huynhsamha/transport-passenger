import db from '../config/oracle';
import { Ticket } from '../models';

const findAll = (offset, limit, cb) => {
  const sql = Ticket.getStmtSelectAll(offset, limit);
  console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql = Ticket.getStmtSelectOneById();
  console.log(sql);

  db.execute(sql, { id })
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const ticket = new Ticket({ ...data, id });
  const sql = ticket.getStmtUpdate();
  console.log(ticket);
  console.log(sql);

  db.execute(sql, ticket)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const ticket = new Ticket(data);
  const sql = ticket.getStmtInsert();
  console.log(ticket);
  console.log(sql);

  db.execute(sql, ticket)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = Ticket.getStmtDeleteOneById();
  console.log(sql);

  db.execute(sql, { id })
    .then(res => cb(null, res))
    .catch(err => cb(err));
};
export default {
  findAll,
  findOneById,
  insert,
  updateOneById,
  deleteOneById,
};
