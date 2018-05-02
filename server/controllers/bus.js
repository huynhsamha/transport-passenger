import db from '../config/sequelize';
import { Bus } from '../models';


const findAll = (offset, limit, cb) => {
  const sql = Bus.getStmtSelectAll(offset, limit);
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
  const sql = bus.getStmtUpdate();
  console.log(bus);
  console.log(sql);

  db.execute(sql, bus)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const bus = new Bus(data);
  const sql = bus.getStmtInsert();
  console.log(bus);
  console.log(sql);

  db.execute(sql, bus)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = Bus.getStmtDeleteOneById();

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
