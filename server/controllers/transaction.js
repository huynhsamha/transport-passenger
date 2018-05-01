import db from '../config/oracle';
import { Transaction } from '../models';

const findAll = (offset, limit, cb) => {
  const sql = Transaction.getStmtSelectAll(offset, limit);
  console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql = Transaction.getStmtSelectOneById();
  console.log(sql);

  db.execute(sql, { id })
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const transaction = new Transaction({ ...data, id });
  const sql = transaction.getStmtUpdate();
  console.log(transaction);
  console.log(sql);

  db.execute(sql, transaction)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const transaction = new Transaction(data);
  const sql = transaction.getStmtInsert();
  console.log(transaction);
  console.log(sql);

  db.execute(sql, transaction)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = Transaction.getStmtDeleteOneById();
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
