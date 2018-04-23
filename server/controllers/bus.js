import db from '../config/oracle';
import { Bus } from '../models';


const findAll = (offset, limit, cb) => {
  const sql = `select * from
  (select b.*, rownum as rn from bus b)
  where rn between ${offset} and ${offset + limit - 1}`;

  console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql = `select bs.*, tp.*
    from bus bs, bus_type tp
    where (bs.id = :id) and (bs.bus_type_id = tp.id)`;

  db.execute(sql, { id })
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const bus = new Bus({ ...data, id });
  console.log(bus);
  console.log(bus.getStmtUpdate());

  db.execute(bus.getStmtUpdate(), bus)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const bus = new Bus(data);
  console.log(bus);
  console.log(bus.getStmtInsert());

  db.execute(bus.getStmtInsert(), bus)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = 'delete from bus where id = :id';

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
