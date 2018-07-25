require('../src/find_index');
const { assert, expect } = require('chai');

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

    describe('empty array', () => {
      it('return -1', () => {
        const array = [];
        const actual = array.findIndex(value => value);
        assert.equal(actual, -1);
      });
    });

    describe('sparse array', () => {
      it('return -1', () => {
        const array = Array(10);
        const actual = array.findIndex(value => value);
        assert.equal(actual, -1);
      });

      it('return -1', () => {
        const array = [, , , , undefined, , , ,];
        const actual = array.findIndex(value => value);
        assert.equal(actual, -1);
      });

      it('found undefined at 1', () => {
        const array = [0, , , , , , , ,];
        const actual = array.findIndex(value => value === undefined);
        assert.equal(actual, 1);
      });

      it('found undefined at 0 (index:4)', () => {
        const array = [, , , , undefined, , , ,];
        const actual = array.findIndex(value => value === undefined);
        assert.equal(actual, 0);
      });

      it('found undefined at 0 (index:7)', () => {
        const array = [, , , , , , , undefined, , , ,];
        const actual = array.findIndex(value => value === undefined);
        assert.equal(actual, 0);
      });
    });
  });

  describe('no args', () => {
    it('throw TypeError', () => {
      const array = [1, 2, 3];
      expect(() => array.findIndex()).to.throw(TypeError);
    });
  });
});
