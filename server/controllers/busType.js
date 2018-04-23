import db from '../config/oracle';
import { BusType } from '../models';


const findAll = (offset, limit, cb) => {
  const sql = `select * from
  (select bt.*, rownum as rn from bus_type bt)
  where rn between ${offset} and ${offset + limit - 1}`;

  console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql = 'select * from bus_type where id = :id';

  db.execute(sql, { id })
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const busType = new BusType({ ...data, id });
  console.log(busType);
  console.log(busType.getStmtUpdate());

  db.execute(busType.getStmtUpdate(), busType)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const busType = new BusType(data);
  console.log(busType);
  console.log(busType.getStmtInsert());

  db.execute(busType.getStmtInsert(), busType)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = 'delete from bus_type where id = :id';

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
