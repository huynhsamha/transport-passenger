import db from '../config/oracle-db';


const findAll = (offset, limit, cb) => {
  const sql =
    `select * from (
      select bs.*, tp.*
      from bus bs, bus_type tp
      where bs.bus_type_id = tp.id
    )
    where
      rownum between ${offset} and ${offset + limit - 1}`;

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql =
  `select bs.*, tp.*
    from bus bs, bus_type tp
    where
      (bs.id = '${id}') and (bs.bus_type_id = tp.id)`;

  db.execute(sql)
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const attributes = [];
  if (data.bus_type_id) attributes.push(`bus_type_id = '${data.bus_type_id}'`);
  if (data.registration) attributes.push(`registration = '${data.registration}'`);
  if (data.price) attributes.push(`price = ${data.price}`);
  if (data.status) attributes.push(`status = '${data.status}'`);
  if (data.miles) attributes.push(`miles = ${data.miles}`);
  if (data.warranty_month) attributes.push(`warranty_month = ${data.warranty_month}`);
  if (data.warranty_miles) attributes.push(`warranty_miles = ${data.warranty_miles}`);
  if (data.description) attributes.push(`description = '${data.description}'`);

  const sql = `update bus
    set ${attributes.join(',')}
    where id = ${id}`;

  db.execute(sql)
    .then(res => cb(null, res.rowsAffected))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const sql = `insert into bus
  (
    id, bus_type_id, registration, price, status,
    miles, warranty_month, warranty_miles, description
  )
  values
  (
    '${data.id}',
    '${data.bus_type_id}',
    '${data.registration}',
    ${data.price},
    '${data.status}',
    ${data.miles},
    ${data.warranty_month},
    ${data.warranty_miles},
    '${data.description}'
  )`;

  // console.log(data);
  // console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = `delete from bus where id = '${id}'`;

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
