require('../src/fill');
const { assert } = require('chai');

describe('fill', () => {
  describe('1 args (target only)', () => {
    it('return all 0', () => {
      const array = [1, 2, 3, 4];
      const actual = array.fill(0);
      assert.deepEqual(actual, [0, 0, 0, 0]);
    });

    it('return all A', () => {
      const array = [1, 2, 3, 4];
      const actual = array.fill('A');
      assert.deepEqual(actual, ['A', 'A', 'A', 'A']);
    });

    it('return all NaN', () => {
      const array = [1, 2, 3, 4];
      const actual = array.fill(NaN);
      assert.deepEqual(actual, [NaN, NaN, NaN, NaN]);
    });

    it('is destructive', () => {
      const array = [1, 2, 3, 4];
      array.fill(0);
      assert.deepEqual(array, [0, 0, 0, 0]);
    });
  });

  describe('2 args (target and start)', () => {
    it('fill 0 starts with 3', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.fill(0, 2);
      assert.deepEqual(actual, [1, 2, 0, 0, 0, 0, 0, 0]);
    });

    it('fill 0 starts with -2(6)', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.fill(0, -2);
      assert.deepEqual(actual, [1, 2, 3, 4, 5, 6, 0, 0]);
    });

    it('fill 0 starts with -2.8(6)', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.fill(0, -2.8);
      assert.deepEqual(actual, [1, 2, 3, 4, 5, 6, 0, 0]);
    });

    it('return same when +overflow', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.fill(0, 9);
      assert.deepEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('fill 0 when -overflow', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.fill(0, -9);
      assert.deepEqual(actual, [0, 0, 0, 0, 0, 0, 0, 0]);
    });
  });

  describe('3 args (target and start and end)', () => {
    it('return same', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.fill(0, 2, 2);
      assert.deepEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('fill 0 at 0 to 2', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.fill(0, 0, 2);
      assert.deepEqual(actual, [0, 0, 3, 4, 5, 6, 7, 8]);
    });

    it('fill 0 at 0 to 2 when 2.8', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.fill(0, 0, 2.8);
      assert.deepEqual(actual, [0, 0, 3, 4, 5, 6, 7, 8]);
    });

    it('fill 0 at 2 to -3(5)', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.fill(0, 2, -3);
      assert.deepEqual(actual, [1, 2, 0, 0, 0, 6, 7, 8]);
    });

    it('fill 0 when +overflow', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.fill(0, 0, 9);
      assert.deepEqual(actual, [0, 0, 0, 0, 0, 0, 0, 0]);
    });

    it('return same when -overflow', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.fill(0, 0, -9);
      assert.deepEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });
});
