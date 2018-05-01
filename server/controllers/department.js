import db from '../config/oracle';
import { Department } from '../models';


const findAll = (offset, limit, cb) => {
  const sql = Department.getStmtSelectAll(offset, limit);
  console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql = `select bs.*, tp.*
    from Department bs, Department_type tp
    where (bs.id = :id) and (bs.Department_type_id = tp.id)`;

  db.execute(sql, { id })
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const department = new Department({ ...data, id });
  const sql = department.getStmtUpdate();
  console.log(department);
  console.log(sql);

  db.execute(sql, department)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const department = new Department(data);
  const sql = department.getStmtInsert();
  console.log(department);
  console.log(sql);

  db.execute(sql, department)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = Department.getStmtDeleteOneById();

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
