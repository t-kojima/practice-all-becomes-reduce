require('../src/copy_within');
const { assert } = require('chai');

describe('copyWithin', () => {
  describe('1 args (target only)', () => {
    it('return same', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(0);
      assert.deepEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('return same when not args', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin();
      assert.deepEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('shift 1', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(1);
      assert.deepEqual(actual, [1, 1, 2, 3, 4, 5, 6, 7]);
    });

    it('shift 1 when 1.6', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(1.6);
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

    describe('empty array', () => {
      it('return empty array when shift 0', () => {
        assert.deepEqual([].copyWithin(0), []);
      });

      it('return empty array when shift 1', () => {
        assert.deepEqual([].copyWithin(1), []);
      });

      it('return empty array when shift -1', () => {
        assert.deepEqual([].copyWithin(-1), []);
      });
    });

    describe('sparse array', () => {
      it('shift 1', () => {
        const array = [, , 2, , 4];
        const actual = array.copyWithin(1);
        assert.deepEqual(actual, [, , , 2, ,]);
        assert.isFalse(0 in actual);
        assert.isFalse(1 in actual);
        assert.isFalse(2 in actual);
        assert.isTrue(3 in actual);
        assert.isFalse(4 in actual);
      });

      it('shift -2', () => {
        const array = [, , 2, , 4];
        const actual = array.copyWithin(-2);
        assert.deepEqual(actual, [, , 2, , ,]);
        assert.isFalse(0 in actual);
        assert.isFalse(1 in actual);
        assert.isTrue(2 in actual);
        assert.isFalse(3 in actual);
        assert.isFalse(4 in actual);
      });
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

    it('shift 4 when 0.8', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(4, 0.8);
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

    describe('empty array', () => {
      it('return empty array when shift 0 starts with 2', () => {
        assert.deepEqual([].copyWithin(0, 2), []);
      });

      it('return empty array when shift 1 starts with -2', () => {
        assert.deepEqual([].copyWithin(1, -2), []);
      });
    });

    describe('sparse array', () => {
      it('shift 1 starts with 2', () => {
        const array = [, , 2, , 4];
        const actual = array.copyWithin(1, 2);
        assert.deepEqual(actual, [, 2, , 4, 4]);
        assert.isFalse(0 in actual);
        assert.isTrue(1 in actual);
        assert.isFalse(2 in actual);
        assert.isTrue(3 in actual);
        assert.isTrue(4 in actual);
      });

      it('shift -2 starts with -1', () => {
        const array = [, , 2, , 4];
        const actual = array.copyWithin(-2, -1);
        assert.deepEqual(actual, [, , 2, 4, 4]);
        assert.isFalse(0 in actual);
        assert.isFalse(1 in actual);
        assert.isTrue(2 in actual);
        assert.isTrue(3 in actual);
        assert.isTrue(4 in actual);
      });
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

    it('shift 4 at 2 values when 2.8', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const actual = array.copyWithin(4, 0, 2.8);
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

    describe('empty array', () => {
      it('empty array when shift 0 starts with 2 at 1 value', () => {
        assert.deepEqual([].copyWithin(0, 2, 1), []);
      });

      it('empty array when shift 1 starts with 2 at -1 value', () => {
        assert.deepEqual([].copyWithin(1, 2, -1), []);
      });
    });

    describe('sparse array', () => {
      it('shift 1 starts with 2 at 2 value', () => {
        const array = [, , 2, , 4];
        const actual = array.copyWithin(1, 2, 4);
        assert.deepEqual(actual, [, 2, , , 4]);
        assert.isFalse(0 in actual);
        assert.isTrue(1 in actual);
        assert.isFalse(2 in actual);
        assert.isFalse(3 in actual);
        assert.isTrue(4 in actual);
      });

      it('shift 2 starts with -2 at -1 value', () => {
        const array = [, , 2, , 4];
        const actual = array.copyWithin(2, -2, -1);
        assert.deepEqual(actual, [, , , , 4]);
        assert.isFalse(0 in actual);
        assert.isFalse(1 in actual);
        assert.isFalse(2 in actual);
        assert.isFalse(3 in actual);
        assert.isTrue(4 in actual);
      });
    });
  });
});
