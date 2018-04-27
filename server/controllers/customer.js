import db from '../config/oracle';
import { Customer } from '../models';

const findAll = (offset, limit, cb) => {
  const sql = Customer.getStmtSelectAll(offset, limit);
  console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql = Customer.getStmtSelectOneById();
  console.log(sql);

  db.execute(sql, { id })
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const customer = new Customer({ ...data, id });
  const sql = Customer.getStmtUpdate();
  console.log(customer);
  console.log(sql);

  db.execute(sql, customer)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const customer = new Customer(data);
  const sql = Customer.getStmtInsert();
  console.log(customer);
  console.log(sql);

  db.execute(sql, customer)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = Customer.getStmtDeleteOneById();
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
