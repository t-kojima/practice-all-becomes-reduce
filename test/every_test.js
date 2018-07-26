require('../src/every');
const { assert, expect } = require('chai');

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

    describe('empty array', () => {
      it('[] return always true', () => {
        const array = [];
        const actual = array.every(value => value % 2 === 0);
        assert.isTrue(actual);
      });
    });

    describe('sparse array', () => {
      it('all sparse return always true', () => {
        const array = [, , , , , ,];
        const actual = array.every(value => value % 2 === 0);
        assert.isTrue(actual);
      });

      it('[,,,4,,,] return true', () => {
        const array = [, , , 4, , ,];
        const actual = array.every(value => value % 2 === 0);
        assert.isTrue(actual);
      });

      it('[,,,5,,,] return false', () => {
        const array = [, , , 5, , ,];
        const actual = array.every(value => value % 2 === 0);
        assert.isFalse(actual);
      });
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

  describe('check truthly', () => {
    it('return true', () => {
      const array = [1, 3, 5, 7];
      const actual = array.every(i => i);
      assert.isTrue(actual);
    });
  });

  describe('no args', () => {
    it('throw TypeError', () => {
      const array = [1, 2, 3];
      expect(() => array.every()).to.throw(TypeError);
    });
  });
});
