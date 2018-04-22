import db from '../config/oracle-db';


const findAll = (offset, limit, cb) => {
  const sql = `select * from bus_type
    where
      rownum between ${offset} and ${offset + limit - 1}`;

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql = `select * from bus_type where id = '${id}'`;

  db.execute(sql)
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const attributes = [];
  if (data.brand) attributes.push(`brand = '${data.brand}'`);
  if (data.model) attributes.push(`model = '${data.model}'`);
  if (data.seats) attributes.push(`seats = ${data.seats}`);
  if (data.speed) attributes.push(`speed = ${data.speed}`);
  if (data.capacity_fuel) attributes.push(`capacity_fuel = ${data.capacity_fuel}`);
  if (data.width) attributes.push(`width = ${data.width}`);
  if (data.length) attributes.push(`length = ${data.length}`);
  if (data.height) attributes.push(`height = ${data.height}`);
  if (data.mass_all) attributes.push(`mass_all = ${data.mass_all}`);
  if (data.mass_no_load) attributes.push(`mass_no_load = ${data.mass_no_load}`);

  const sql = `update account
    set ${attributes.join(',')}
    where id = ${id}`;

  db.execute(sql)
    .then(res => cb(null, res.rowsAffected))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const sql = `insert into bus_type
  (
    id, brand, model, seats, speed, capacity_fuel,
    width, length, height, mass_all, mass_no_load
  )
  values
  (
    '${data.id}',
    '${data.brand}',
    '${data.model}',
    ${data.seats},
    ${data.speed},
    ${data.capacity_fuel},
    ${data.width},
    ${data.length},
    ${data.height},
    ${data.mass_all},
    ${data.mass_no_load}
  )`;

  // console.log(data);
  // console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = `delete from bus_type where id = '${id}'`;

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
