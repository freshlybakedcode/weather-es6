import assert from 'assert';
import {add} from '../../src/js/modules/maths';

describe('maths.js tests', function() {
    describe('add()', function() {
        it('should add two numbers', function() {
            assert.equal(add(4,3), 7);
        });
    });
});  