import db from '../config/sequelize';
import { TripDaily } from '../models';


const findAll = (offset, limit, cb) => {
  const sql = TripDaily.getStmtSelectAll(offset, limit);
  console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql = TripDaily.getStmtSelectOneById();
  console.log(sql);

  db.execute(sql, { id })
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const tripDaily = new TripDaily({ ...data, id });
  const sql = tripDaily.getStmtUpdate();
  console.log(tripDaily);
  console.log(sql);

  db.execute(sql, tripDaily)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const tripDaily = new TripDaily(data);
  const sql = tripDaily.getStmtInsert();
  console.log(tripDaily);
  console.log(sql);

  db.execute(sql, tripDaily)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = TripDaily.getStmtDeleteOneById();
  console.log(sql);

  db.execute(sql, { id })
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const findTripsByOne = (tripDailyId, offset, limit, cb) => {
  const sql =
    `select * from (
      select * from trip
      where trip_daily_id = ${tripDailyId}
    )
    where
      rownum between ${offset} and ${offset + limit - 1}`;

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

export default {
  findAll,
  findOneById,
  insert,
  updateOneById,
  deleteOneById,
  findTripsByOne
};
