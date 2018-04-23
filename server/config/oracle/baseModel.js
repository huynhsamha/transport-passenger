import _ from 'lodash';
import DataTypes from './dataTypes';

// define base model
class Model {

  getAttributes = () => this.constructor.attributes;
  getTableName = () => this.constructor.tableName;
  getPrimaryKey = () => this.constructor.primaryKey;

  constructor(data) {
    if (!data) return;
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
Model.tableName = 'MODEL';
Model.primaryKey = 'id';

// default static statements
Model.getStmtSelectAll = model => (offset, limit) =>
  `select * from
      (select _table.*, rownum as _rownum
        from ${model.tableName} _table)
      where
        _rownum between ${offset} and ${offset + limit - 1}`;


Model.getStmtSelectOneById = model => () =>
  `select * from ${model.tableName}
    where ${model.primaryKey} = :${model.primaryKey}`;


Model.getStmtDeleteOneById = model => () =>
  `delete * from ${model.tableName}
    where ${model.primaryKey} = :${model.primaryKey}`;


export default Model;
