import db from '../../config/sequelize';
import { Driver } from '../../models/employee';


const findAll = (offset, limit, cb) => {
  const sql =
  `select * from (
    select temp.*, rownum as rnum from (
      select m.*, e.* from driver d, employee e where (e.id = d.id)
    ) temp
  ) where
    rn between ${offset} and ${offset + limit - 1}`;

  console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql =
  `select emp.*, d.* from
    (select driver.*, e.* from driver, employee e where (driver.id = :id) and (e.id = driver.id)) emp,
    department d
  where emp.department_id = d.id`;

  console.log(sql);

  db.execute(sql, { id })
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const driver = new Driver({ ...data, id });
  const sql = driver.getStmtUpdate();
  console.log(driver);
  console.log(sql);

  db.execute(sql, driver)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const driver = new Driver(data);
  const sql = driver.getStmtInsert();
  console.log(driver);
  console.log(sql);

  db.execute(sql, driver)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = Driver.getStmtDeleteOneById();
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
