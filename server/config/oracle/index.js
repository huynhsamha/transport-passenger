import oracledb from 'oracledb';
import dbconfig from '../../../config/db';
import _ from 'lodash';
import Model from './baseModel';
import DataTypes from './dataTypes';

/** Config global oracledb */
oracledb.outFormat = oracledb.OBJECT; // default is ARRAY
oracledb.autoCommit = true;
oracledb.maxRows = 0; // by default, max rows return for execute

function createPool() {
  return oracledb.createPool({
    user: dbconfig.username,
    password: dbconfig.password,
    connectString: dbconfig.connectString,
    poolMin: 5,
    poolMax: 50
  });
}

function closePool() {
  return oracledb.getPool().close();
}

async function execute(sql = '', bindParams = {}, options = {}) {
  const pool = oracledb.getPool();
  try {
    const conn = await pool.getConnection();
    return await conn.execute(sql, bindParams, options);

  } catch (err) {
    return err;
  }
}

export default {
  createPool,
  closePool,
  execute,
  Model,
  DataTypes
};
