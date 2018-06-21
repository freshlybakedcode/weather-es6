import assert from 'assert';
import add from '../../src/js/modules/maths';

describe('maths.js tests', () => {
  describe('add()', () => {
    it('should exist', () => {
      assert.notStrictEqual(add(), undefined);
    });
    it('should add two numbers', () => {
      assert.equal(add(4, 3), 7);
    });
  });
});
