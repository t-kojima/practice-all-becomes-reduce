require('../src/find_index');
const { assert } = require('chai');

describe('findIndex', () => {
  describe('if check even', () => {
    it('[1,2,3,4] return 1', () => {
      const array = [1, 2, 3, 4];
      const actual = array.findIndex(value => value % 2 === 0);
      assert.equal(actual, 1);
    });

    it('[1,0,3,4] return 0', () => {
      const array = [1, 0, 3, 4];
      const actual = array.findIndex(value => value === 0);
      assert.equal(actual, 1);
    });

    it('[1,2,undefined,4] return undefined', () => {
      const array = [1, 2, undefined, 4];
      const actual = array.findIndex(value => value === undefined);
      assert.equal(actual, 2);
    });

    it('[1,3,5,7] return undefinded', () => {
      const array = [1, 3, 5, 7];
      const actual = array.findIndex(value => value % 2 === 0);
      assert.equal(actual, -1);
    });

    it('is not destructive', () => {
      const array = [1, 2, 3, 4];
      array.findIndex(value => value % 2 === 0);
      assert.deepEqual(array, [1, 2, 3, 4]);
    });

    describe('set thisArg at 1', () => {
      it('[1,3,5,7] return 0', () => {
        const array = [1, 3, 5, 7];
        const actual = array.findIndex(function(value) {
          return (this + value) % 2 === 0;
        }, 1);
        assert.equal(actual, 0);
      });

      it('[1,3,5,7] return undefined when use Arrow Function', () => {
        const array = [1, 3, 5, 7];
        const actual = array.findIndex(value => (this + value) % 2 === 0, 1);
        assert.equal(actual, -1);
      });
    });

    describe('not set thisArg', () => {
      it('this is not undefined in callback', () => {
        const array = [1, 3, 5, 7];
        const actual = array.findIndex(function() {
          return this === undefined;
        });
        assert.equal(actual, -1);
      });
    });
  });
});
