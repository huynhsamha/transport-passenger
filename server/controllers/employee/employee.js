import db from '../../config/oracle';
import { Employee } from '../../models';


const findAll = (offset, limit, cb) => {
  const sql = Employee.getStmtSelectAll(offset, limit);
  console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql = `select e.*, d.*
    from employee e, department d
    where (e.id = :id) and (e.department_id = d.id)`;
  console.log(sql);

  db.execute(sql, { id })
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const employee = new Employee({ ...data, id });
  const sql = employee.getStmtUpdate();
  console.log(employee);
  console.log(sql);

  db.execute(sql, employee)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const employee = new Employee(data);
  const sql = employee.getStmtInsert();
  console.log(employee);
  console.log(sql);

  db.execute(sql, employee)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = Employee.getStmtDeleteOneById();
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
