import * as Models from './index';
import _ from 'lodash';
import { expect } from 'chai';
import BaseModel from '../config/oracle/baseModel';

describe('test models', () => {

  _.forOwn(Models, (model, nameModel) => {

    describe(nameModel, () => {

      it('should be instance of BaseModel', () => {
        expect(new model()).to.be.instanceof(BaseModel);
      });

      it('should override default table name', () => {
        expect(model.tableName).not.equal(BaseModel.tableName);
      });

      it('should have more than 1 attribute', () => {
        expect(_.size(model.attributes)).gt(1);
      });
    });
  });
});
