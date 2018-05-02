import db from '../config/sequelize';
import { Trip } from '../models';


const findAll = (offset, limit, cb) => {
  const sql = Trip.getStmtSelectAll(offset, limit);
  console.log(sql);

  db.execute(sql)
    .then(res => cb(null, res.rows))
    .catch(err => cb(err));
};

const findOneById = (id, cb) => {
  const sql = `select t.*, td.*
    from Trip t, Trip_daily td
    where (t.id = :id) and (t.trip_daily_id = td.id)`;

  db.execute(sql, { id })
    .then(res => cb(null, res.rows[0]))
    .catch(err => cb(err));
};

const updateOneById = (id, data, cb) => {
  const trip = new Trip({ ...data, id });
  const sql = trip.getStmtUpdate();
  console.log(trip);
  console.log(sql);

  db.execute(sql, trip)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const insert = (data, cb) => {
  const trip = new Trip(data);
  const sql = trip.getStmtInsert();
  console.log(trip);
  console.log(sql);

  db.execute(sql, trip)
    .then(res => cb(null, res))
    .catch(err => cb(err));
};

const deleteOneById = (id, cb) => {
  const sql = Trip.getStmtDeleteOneById();

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
