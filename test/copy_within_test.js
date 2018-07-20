require('../src/copy_within');
const { assert } = require('chai');

describe('copyWithin', () => {
  describe('1 args (target only)', () => {
    it('return same', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(0);
      assert.deepEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('shift 1', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(1);
      assert.deepEqual(actual, [1, 1, 2, 3, 4, 5, 6, 7]);
    });

    it('shift -3', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(-3);
      assert.deepEqual(actual, [1, 2, 3, 4, 5, 1, 2, 3]);
    });

    it('is destructive', () => {
      const array = [1, 2, 3, 4];
      array.copyWithin(1);
      assert.deepEqual(array, [1, 1, 2, 3]);
    });

    it('return same when +overflow', () => {
      const array = [1, 2, 3, 4];
      const actual = array.copyWithin(5);
      assert.deepEqual(actual, [1, 2, 3, 4]);
    });

    it('return same when -overflow', () => {
      const array = [1, 2, 3, 4];
      const actual = array.copyWithin(-6);
      assert.deepEqual(actual, [1, 2, 3, 4]);
    });
  });

  describe('2 args (target and start)', () => {
    it('return same', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(2, 2);
      assert.deepEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('shift 4', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(4, 0);
      assert.deepEqual(actual, [1, 2, 3, 4, 1, 2, 3, 4]);
    });

    it('shift -5 starts with 3', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(-5, 2);
      assert.deepEqual(actual, [1, 2, 3, 3, 4, 5, 6, 7]);
    });

    it('return same when +overflow', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(4, 9);
      assert.deepEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('return same when -overflow', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(4, -9);
      assert.deepEqual(actual, [1, 2, 3, 4, 1, 2, 3, 4]);
    });
  });

  describe('3 args (target and start and end)', () => {
    it('return same', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(4, 2, 2);
      assert.deepEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('shift 4 at 2 values', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(4, 0, 2);
      assert.deepEqual(actual, [1, 2, 3, 4, 1, 2, 7, 8]);
    });

    it('shift -5 starts with 3 at 1 value', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(-5, 2, 3);
      assert.deepEqual(actual, [1, 2, 3, 3, 5, 6, 7, 8]);
    });

    it('return same when +overflow', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(4, 0, 9);
      assert.deepEqual(actual, [1, 2, 3, 4, 1, 2, 3, 4]);
    });

    it('return same when -overflow', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(4, 0, -9);
      assert.deepEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });
});
