import db from '../config/sequelize';
import { District } from '../models';


const findAll = (offset, limit, cb) => {
  const sql = District.getStmtSelectAll(offset, limit);
  console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql = District.getStmtDeleteOneById();
  console.log(sql);

  db.execute(sql, { id })
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const district = new District({ ...data, id });
  const sql = district.getStmtUpdate();
  console.log(district);
  console.log(sql);

  db.execute(sql, district)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = async (data, cb) => {
  const district = new District(data);
  const sql = district.getStmtInsert();
  console.log(district);
  console.log(sql);

  db.execute(sql, district)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = District.getStmtDeleteOneById();
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
