import db from '../config/sequelize';
import { BusType } from '../models';


const findAll = (offset, limit, cb) => {
  const sql = BusType.getStmtSelectAll(offset, limit);
  console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql = BusType.getStmtSelectOneById();
  console.log(sql);

  db.execute(sql, { id })
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const busType = new BusType({ ...data, id });
  const sql = busType.getStmtUpdate();
  console.log(busType);
  console.log(sql);

  db.execute(sql, busType)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const busType = new BusType(data);
  const sql = busType.getStmtInsert();
  console.log(busType);
  console.log(sql);

  db.execute(sql, busType)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = BusType.getStmtDeleteOneById();
  console.log(sql);

  db.execute(sql, { id })
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const findBusesByOne = (busTypeId, offset, limit, cb) => {
  const sql =
    `select * from (
      select * from bus
      where bus_type_id = ${busTypeId}
    )
    where
      rownum between ${offset} and ${offset + limit - 1}`;

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

export default {
  findAll,
  findOneById,
  insert,
  updateOneById,
  deleteOneById,
  findBusesByOne
};
