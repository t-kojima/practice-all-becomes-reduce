// require('../src/filter');
const { assert } = require('chai');

describe('filter', () => {
  describe('if check even', () => {
    it('[1,2,3,4] return [2,4]', () => {
      const array = [1, 2, 3, 4];
      const actual = array.filter(value => value % 2 === 0);
      assert.deepEqual(actual, [2, 4]);
    });

    it('[1,3,5,7] return []', () => {
      const array = [1, 3, 5, 7];
      const actual = array.filter(value => value % 2 === 0);
      assert.deepEqual(actual, []);
    });

    it('is not destructive', () => {
      const array = [1, 2, 3, 4];
      array.filter(value => value % 2 === 0);
      assert.deepEqual(array, [1, 2, 3, 4]);
    });

    describe('empty array', () => {
      it('return empty', () => {
        const array = [];
        const actual = array.filter(value => value);
        assert.deepEqual(actual, []);
      });
    });

    describe('sparse array', () => {
      it('return empty', () => {
        const array = Array(10);
        const actual = array.filter(value => value);
        assert.deepEqual(actual, []);
      });

      it('return empty when check property', () => {
        const array = Array(5);
        const actual = array.filter((value, index) => !(index in array));
        assert.deepEqual(actual, []);
      });

      it('return empty when check index', () => {
        const array = Array(5);
        const actual = array.filter((value, index) => index);
        assert.deepEqual(actual, []);
      });
    });

    describe('set thisArg at 1', () => {
      it('[1,3,5,7] return [1,3,5,7]', () => {
        const array = [1, 3, 5, 7];
        const actual = array.filter(function(value) {
          return (this + value) % 2 === 0;
        }, 1);
        assert.deepEqual(actual, [1, 3, 5, 7]);
      });

      it('[1,3,5,7] return false when use Arrow Function', () => {
        const array = [1, 3, 5, 7];
        const actual = array.filter(value => (this + value) % 2 === 0, 1);
        assert.deepEqual(actual, []);
      });
    });

    it('filter falsy values', () => {
      const array = [1, 3, 5, null, , undefined, false, 7];
      const actual = array.filter(value => value);
      assert.deepEqual(actual, [1, 3, 5, 7]);
    });
  });
});
