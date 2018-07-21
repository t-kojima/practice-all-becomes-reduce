require('../src/find');
const { assert } = require('chai');

describe('find', () => {
  describe('if check even', () => {
    it('[1,2,3,4] return 2', () => {
      const array = [1, 2, 3, 4];
      const actual = array.find(value => value % 2 === 0);
      assert.equal(actual, 2);
    });

    it('[1,3,5,7] return undefinded', () => {
      const array = [1, 3, 5, 7];
      const actual = array.find(value => value % 2 === 0);
      assert.isUndefined(actual);
    });

    it('is not destructive', () => {
      const array = [1, 2, 3, 4];
      array.find(value => value % 2 === 0);
      assert.deepEqual(array, [1, 2, 3, 4]);
    });

    describe('set thisArg at 1', () => {
      it('[1,3,5,7] return 1', () => {
        const array = [1, 3, 5, 7];
        const actual = array.find(function(value) {
          return (this + value) % 2 === 0;
        }, 1);
        assert.equal(actual, 1);
      });

      it('[1,3,5,7] return undefined when use Arrow Function', () => {
        const array = [1, 3, 5, 7];
        const actual = array.find(value => (this + value) % 2 === 0, 1);
        assert.isUndefined(actual);
      });
    });

    describe('not set thisArg', () => {
      it('this is not undefined in callback', () => {
        const array = [1, 3, 5, 7];
        const actual = array.find(function() {
          return this === undefined;
        });
        assert.equal(actual, undefined);
      });
    });
  });
});
