import oracledb from 'oracledb';
import dbconfig from '../../config/db';

/** Config global oracledb */
oracledb.outFormat = oracledb.OBJECT;
oracledb.autoCommit = true;

function CreatePool() {
  return oracledb.createPool({
    user: dbconfig.username,
    password: dbconfig.password,
    connectString: dbconfig.connectString,
    poolMin: 5,
    poolMax: 44
  });
}

function ClosePool() {
  return oracledb.getPool().close();
}

const execute = async (sql) => {
  const pool = oracledb.getPool();
  try {
    const conn = await pool.getConnection();
    return await conn.execute(sql);

  } catch (err) {
    return err;
  }
};

export default {
  CreatePool,
  ClosePool,
  execute
};
