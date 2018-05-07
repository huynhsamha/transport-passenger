import * as Controllers from './index';
import _ from 'lodash';
import { expect } from 'chai';

describe('test controllers', () => {

  _.forOwn(Controllers, (controller, nameController) => {

    describe(nameController, () => {

      it('should be a object', () => {
        expect(controller).to.be.a('object');
      });

      it('should have multiple functions', () => {
        _.forOwn(controller, (val, key) => {
          expect(val).to.be.a('function');
        });
      });
    });
  });
});
