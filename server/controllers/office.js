import db from '../config/sequelize';
import { Office } from '../models';


const findAll = (offset, limit, cb) => {
  const sql = Office.getStmtSelectAll(offset, limit);
  console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql = Office.getStmtDeleteOneById();
  console.log(sql);

  db.execute(sql, { id })
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const office = new Office({ ...data, id });
  const sql = office.getStmtUpdate();
  console.log(office);
  console.log(sql);

  db.execute(sql, office)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = async (data, cb) => {
  const office = new Office(data);
  const sql = office.getStmtInsert();
  console.log(office);
  console.log(sql);

  db.execute(sql, office)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = Office.getStmtDeleteOneById();
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
  deleteOneById
};
