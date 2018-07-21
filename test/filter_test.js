require('../src/filter');
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
  });
});