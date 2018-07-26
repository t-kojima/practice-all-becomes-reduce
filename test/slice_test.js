require('../src/slice');
const { assert } = require('chai');

describe('slice', () => {
  describe('0 args', () => {
    it('same array', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.slice();
      assert.deepEqual(actual, [1, 2, 3, 4, 5]);
    });

    it('shallow copy', () => {
      const array = [{ a: 1 }, { b: 2 }, { c: 3 }];
      const actual = array.slice();
      array[0].a = 4;
      assert.deepEqual(actual, [{ a: 4 }, { b: 2 }, { c: 3 }]);
    });

    describe('empty array', () => {
      it('same array', () => {
        const array = [];
        const actual = array.slice();
        assert.deepEqual(actual, []);
      });
    });

    describe('sparse array', () => {
      it('same array', () => {
        const array = Array(5);
        const actual = array.slice();
        assert.deepEqual(actual, Array(5));
      });
    });
  });

  describe('1 args', () => {
    it('slice a value', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.slice(1);
      assert.deepEqual(actual, [2, 3, 4, 5]);
    });

    it('slice some values when -2', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.slice(-2);
      assert.deepEqual(actual, [4, 5]);
    });

    it('all slice when arg == length', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.slice(5);
      assert.deepEqual(actual, []);
    });

    it('all slice when +overflow', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.slice(6);
      assert.deepEqual(actual, []);
    });

    it('same array when -overflow', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.slice(-5);
      assert.deepEqual(actual, [1, 2, 3, 4, 5]);
    });

    it('is not destructive', () => {
      const array = [1, 2, 3, 4, 5];
      array.slice(2);
      assert.deepEqual(array, [1, 2, 3, 4, 5]);
    });

    describe('empty array', () => {
      it('same array', () => {
        const array = [];
        const actual = array.slice(2);
        assert.deepEqual(actual, []);
      });
    });

    describe('sparse array', () => {
      it('slice some values', () => {
        const array = [, , , 3, 4, ,];
        const actual = array.slice(2);
        assert.deepEqual(actual, [, 3, 4, ,]);
      });
    });
  });

  describe('2 args', () => {
    it('slice some values', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.slice(1, 3);
      assert.deepEqual(actual, [2, 3]);
    });

    it('slice some values when -2 to -1', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.slice(-2, -1);
      assert.deepEqual(actual, [4]);
    });

    it('all slice when +overflow', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.slice(2, 6);
      assert.deepEqual(actual, [3, 4, 5]);
    });

    it('same array when -overflow', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.slice(0, -6);
      assert.deepEqual(actual, []);
    });

    describe('empty array', () => {
      it('same array', () => {
        const array = [];
        const actual = array.slice(0, 2);
        assert.deepEqual(actual, []);
      });
    });

    describe('sparse array', () => {
      it('slice some values', () => {
        const array = [, , , 3, 4, ,];
        const actual = array.slice(2, 4);
        assert.deepEqual(actual, [, 3]);
      });
    });
  });
});
