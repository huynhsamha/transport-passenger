import _ from 'lodash';
import DataTypes from './dataTypes';

// define base model
class Model {

  getAttributes() { return this.constructor.attributes; }
  getTableName() { return this.constructor.tableName; }
  getPrimaryKey() { return this.constructor.primaryKey; }

  constructor(data) {
    const attributes = this.getAttributes();
    _.forOwn(attributes, (val, key) => {
      switch (val.type) {
        case DataTypes.STRING:
          if (data[key]) {
            this[key] = String(data[key]);
          }
          break;
        case DataTypes.NUMBER:
          if (data[key]) {
            this[key] = Number(data[key]);
          }
          break;
        case DataTypes.DATE:
          if (data[key]) {
            this[key] = new Date(data[key]);
          }
          break;
        case DataTypes.TIMESTAMP:
          if (data[key]) {
            this[key] = new Date(data[key]).getTime();
          }
          break;
      }
    });
  }

  getStmtInsert() {
    const attributes = this.getAttributes();
    let sql = `insert into ${this.getTableName()} `;
    const keys = [];
    const vals = [];
    _.forOwn(attributes, (val, key) => {
      if (this[key]) {
        keys.push(key);
        vals.push(`:${key}`);
      }
    });
    sql += `(${keys.join(', ')}) values (${vals.join(', ')})`;

    return sql;
  }

  getStmtUpdate() {
    const attributes = this.getAttributes();
    const pk = this.getPrimaryKey();
    let sql = `update ${this.getTableName()} set `;
    const key_val = [];
    _.forOwn(attributes, (val, key) => {
      if (this[key] && key != pk)
        key_val.push(`${key} = :${key}`);
    });
    sql += key_val.join(', ');
    sql += ` where ${pk} = :${pk}`;
    return sql;
  }
}

// default properties of class
Model.attributes = {
  id: { type: DataTypes.STRING }
};
Model.tableName = 'Model';
Model.primaryKey = 'id';


export default Model;
