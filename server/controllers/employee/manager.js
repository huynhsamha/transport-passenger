import db from '../../config/sequelize';
import { Manager } from '../../models/employee';


const findAll = (offset, limit, cb) => {
  const sql =
  `select * from (
    select temp.*, rownum as rnum, from (
      select m.*, e.* from manager m, employee e where (e.id = m.id)
    ) temp
  ) where
      rnum between ${offset} and ${offset + limit - 1}`;

  console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql =
  `select mgr.*, d.* from
    (select m.*, e.* from manager m, employee e where (m.id = :id) and (e.id = m.id)) mgr,
    department d
  where mgr.department_id = d.id`;

  console.log(sql);

  db.execute(sql, { id })
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const manager = new Manager({ ...data, id });
  const sql = manager.getStmtUpdate();
  console.log(manager);
  console.log(sql);

  db.execute(sql, manager)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const manager = new Manager(data);
  const sql = manager.getStmtInsert();
  console.log(manager);
  console.log(sql);

  db.execute(sql, manager)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = Manager.getStmtDeleteOneById();
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
