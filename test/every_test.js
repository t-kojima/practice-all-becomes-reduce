require('../src/every');
const { assert } = require('chai');

describe('every', () => {
  describe('if check even', () => {
    it('[1,2,3,4] return false', () => {
      const array = [1, 2, 3, 4];
      const actual = array.every(value => value % 2 === 0);
      assert.isFalse(actual);
    });

    it('[2,4,6,8] return true', () => {
      const array = [2, 4, 6, 8];
      const actual = array.every(value => value % 2 === 0);
      assert.isTrue(actual);
    });

    it('[] return true', () => {
      const array = [];
      const actual = array.every(value => value % 2 === 0);
      assert.isTrue(actual);
    });

    describe('set thisArg at 1', () => {
      it('[1,3,5,7] return true', () => {
        const array = [1, 3, 5, 7];
        const actual = array.every(function(value) {
          return (this + value) % 2 === 0;
        }, 1);
        assert.isTrue(actual);
      });

      it('[1,3,5,7] return false when use Arrow Function', () => {
        const array = [1, 3, 5, 7];
        const actual = array.every(value => (this + value) % 2 === 0, 1);
        assert.isFalse(actual);
      });
    });
  });
});
