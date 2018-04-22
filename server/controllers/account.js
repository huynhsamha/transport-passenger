import db from '../config/oracle-db';


const findAll = (offset, limit, cb) => {
  const sql = `select * from account
    where
      rownum between ${offset} and ${offset + limit - 1}`;

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql = `select * from account where id = ${id}`;

  db.execute(sql)
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const attributes = [];
  if (data.type) attributes.push(`type = '${data.type}'`);
  if (data.surplus) attributes.push(`surplus = '${data.surplus}'`);

  const sql = `update account
    set ${attributes.join(',')}
    where id = ${id}`;

  db.execute(sql)
    .then(res => cb(null, res.rowsAffected))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const sql = `insert into account
  (
    email, password, type, surplus, owner_id
  )
  values
  (
    '${data.email}', '${data.password}', '${data.type}',
    ${data.surplus}, ${data.owner_id}
  )`;

  db.execute(sql)
    .then(res => cb(null, res.rowsAffected))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = `delete from table where id = ${id}`;

  db.execute(sql)
    .then(res => cb(null, res.rowsAffected))
    .catch(err => cb(err));
};


export default {
  findAll,
  findOneById,
  insert,
  updateOneById,
  deleteOneById
};
