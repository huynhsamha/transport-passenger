import db from '../../config/oracle';
import { Employee } from '../../models';
import ManagerCtrl from './manager';


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

const insert = async (data, cb) => {
  const employee = new Employee(data);
  const sql = employee.getStmtInsert();
  // console.log(employee);
  // console.log(sql);

  try {
    const res = await db.execute(sql, employee);
    // if (!employee.role) return cb(null, res);
    // switch (employee.role) {
    //   case 'manager':
    //     ManagerCtrl.insert(data, (err, res) => {
    //       if (err) throw err;
    //       return cb(null, res);
    //     });
    //     break;
    // }
    return cb(null, res);

  } catch (err) {
    cb(err);
  }

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


const findOneByUsername = (username) => {
  const sql = 'select * from employee where username = :username';

  return db.execute(sql, { username }).then(res => res.rows[0]);
};

const changePassword = (username, password) => {
  const sql = 'update employee set password = :password where username = :username';

  return db.execute(sql, { username, password });
};


export default {
  findAll,
  findOneById,
  insert,
  updateOneById,
  deleteOneById,
  findOneByUsername,
  changePassword
};
