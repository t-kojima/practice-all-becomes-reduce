require('../src/unshift');
const { assert } = require('chai');

describe('unshift', () => {
  describe('no args', () => {
    it('return length', () => {
      const array = [1, 2, 3];
      const actual = array.unshift();
      assert.equal(actual, 3);
    });

    it('same array', () => {
      const array = [1, 2, 3];
      array.unshift();
      assert.deepEqual(array, [1, 2, 3]);
    });
  });

  describe('1 args', () => {
    it('return length', () => {
      const array = [1, 2, 3];
      const actual = array.unshift(0);
      assert.equal(actual, 4);
    });

    it('append first element', () => {
      const array = [1, 2, 3];
      array.unshift(0);
      assert.deepEqual(array, [0, 1, 2, 3]);
    });
  });

  describe('2 args', () => {
    it('return length', () => {
      const array = [1, 2, 3];
      const actual = array.unshift(0, 9);
      assert.equal(actual, 5);
    });

    it('append first element', () => {
      const array = [1, 2, 3];
      array.unshift(0, 9);
      assert.deepEqual(array, [0, 9, 1, 2, 3]);
    });
  });

  describe('empty array', () => {
    it('return undefined', () => {
      const array = [];
      const actual = array.unshift(undefined);
      assert.equal(actual, 1);
    });
  });

  describe('sparse array', () => {
    it('unshift undefined', () => {
      const array = Array(10);
      array.unshift(undefined);
      assert.deepEqual(array, [undefined, , , , , , , , , , ,]);
    });

    it('unshift undefined with value', () => {
      const array = [, , , , 4, , , , , ,];
      array.unshift(undefined);
      assert.deepEqual(array, [undefined, , , , , 4, , , , , ,]);
      assert.isTrue(0 in array);
      assert.isFalse(1 in array);
      assert.isFalse(2 in array);
      assert.isFalse(3 in array);
      assert.isFalse(4 in array);
      assert.isFalse(6 in array);
      assert.isFalse(7 in array);
    });
  });
});
