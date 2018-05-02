import db from '../config/sequelize';
import { City } from '../models';


const findAll = (offset, limit, cb) => {
  const sql = City.getStmtSelectAll(offset, limit);
  console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql = City.getStmtDeleteOneById();
  console.log(sql);

  db.execute(sql, { id })
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const city = new City({ ...data, id });
  const sql = city.getStmtUpdate();
  console.log(city);
  console.log(sql);

  db.execute(sql, City)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = async (data, cb) => {
  const city = new City(data);
  const sql = city.getStmtInsert();
  console.log(city);
  console.log(sql);

  db.execute(sql, city)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = City.getStmtDeleteOneById();
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
