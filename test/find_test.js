require('../src/find');
const { assert } = require('chai');

describe('find', () => {
  describe('if check even', () => {
    it('[1,2,3,4] return 2', () => {
      const array = [1, 2, 3, 4];
      const actual = array.find(value => value % 2 === 0);
      assert.equal(actual, 2);
    });

    it('[1,0,3,4] return 0', () => {
      const array = [1, 0, 3, 4];
      const actual = array.find(value => value === 0);
      assert.equal(actual, 0);
    });

    it('[1,2,undefined,4] return undefined', () => {
      const array = [1, 2, undefined, 4];
      const actual = array.find(value => value === undefined);
      assert.equal(actual, undefined);
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

    describe('empty array', () => {
      it('return undefined', () => {
        const array = [];
        const actual = array.find(value => value);
        assert.equal(actual, undefined);
      });
    });

    describe('sparse array', () => {
      it('return undefined', () => {
        const array = Array(10);
        const actual = array.find(value => value);
        assert.equal(actual, undefined);
      });

      it('return undefined', () => {
        const array = [, , , , undefined, , , ,];
        const actual = array.find(value => value);
        assert.equal(actual, undefined);
      });

      it('found undefined (index:4)', () => {
        const array = [, , , , undefined, , , ,];
        const actual = array.find(value => value === undefined);
        assert.equal(actual, undefined);
      });

      it('found 7 (index:7)', () => {
        const array = [, , , , , , , 7, , , ,];
        const actual = array.find(value => value === 7);
        assert.equal(actual, 7);
      });
    });
  });
});
