require('../src/splice');
const { assert } = require('chai');

describe('splice', () => {
  describe('no args', () => {
    it('same array', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.splice();
      assert.deepEqual(actual, []);
      assert.deepEqual(array, [1, 2, 3, 4, 5]);
    });

    describe('empty array', () => {
      it('same array', () => {
        const array = [];
        const actual = array.splice();
        assert.deepEqual(actual, []);
        assert.deepEqual(array, []);
      });
    });

    describe('sparse array', () => {
      it('same array', () => {
        const array = Array(5);
        const actual = array.splice();
        assert.deepEqual(actual, []);
        assert.deepEqual(array, Array(5));
      });
    });
  });

  describe('1 args', () => {
    it('cut 4 items when 1', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.splice(1);
      assert.deepEqual(actual, [2, 3, 4, 5]);
      assert.deepEqual(array, [1]);
    });

    it('not cut when +overflow', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.splice(6);
      assert.deepEqual(actual, []);
      assert.deepEqual(array, [1, 2, 3, 4, 5]);
    });

    it('cut 1 item when -1', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.splice(-1);
      assert.deepEqual(actual, [5]);
      assert.deepEqual(array, [1, 2, 3, 4]);
    });

    it('cut all items when -overflow', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.splice(-6);
      assert.deepEqual(actual, [1, 2, 3, 4, 5]);
      assert.deepEqual(array, []);
    });

    describe('empty array', () => {
      it('same array', () => {
        const array = [];
        const actual = array.splice(1);
        assert.deepEqual(actual, []);
        assert.deepEqual(array, []);
      });
    });

    describe('sparse array', () => {
      it('cut 3 items when 2', () => {
        const array = Array(5);
        const actual = array.splice(2);
        assert.deepEqual(actual, [, , ,]);
        assert.deepEqual(array, Array(2));
      });

      it('cut 3 items when 2 with sparse and a value', () => {
        const array = [, 1, , 4, ,];
        const actual = array.splice(2);
        assert.deepEqual(actual, [, 4, ,]);
        assert.isFalse(0 in actual);
        assert.isTrue(1 in actual);
        assert.isFalse(2 in actual);
        assert.deepEqual(array, [, 1]);
        assert.isFalse(0 in array);
        assert.isTrue(1 in array);
      });
    });
  });

  describe('2 args', () => {
    it('cut 2 items when 1 to 2', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.splice(1, 2);
      assert.deepEqual(actual, [2, 3]);
      assert.deepEqual(array, [1, 4, 5]);
    });

    it('cut 3 items when +overflow', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.splice(2, 7);
      assert.deepEqual(actual, [3, 4, 5]);
      assert.deepEqual(array, [1, 2]);
    });

    it('cut 1 item when -2 to 1', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.splice(-2, 1);
      assert.deepEqual(actual, [4]);
      assert.deepEqual(array, [1, 2, 3, 5]);
    });

    it('not cut when -overflow', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.splice(2, -6);
      assert.deepEqual(actual, []);
      assert.deepEqual(array, [1, 2, 3, 4, 5]);
    });

    describe('empty array', () => {
      it('same array', () => {
        const array = [];
        const actual = array.splice(1, 2);
        assert.deepEqual(actual, []);
        assert.deepEqual(array, []);
      });
    });

    describe('sparse array', () => {
      it('cut 1 items when 2 to 1', () => {
        const array = Array(5);
        const actual = array.splice(2, 1);
        assert.deepEqual(actual, [,]);
        assert.deepEqual(array, Array(4));
      });

      it('cut 2 items when 2 to 2 with sparse and a value', () => {
        const array = [, 1, , 4, ,];
        const actual = array.splice(2, 2);
        assert.deepEqual(actual, [, 4]);
        assert.deepEqual(array, [, 1, ,]);
      });
    });
  });

  describe('1 args and some values', () => {
    it('cut 4 items and push 2 items when 1', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.splice(1, 'a', 'b', 'c');
      assert.deepEqual(actual, []);
      assert.deepEqual(array, [1, 'b', 'c', 2, 3, 4, 5]);
    });
  });

  describe('2 args and some values', () => {
    it('cut 2 items and add 2 items when 1 to 2', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.splice(1, 2, 'A', 'B');
      assert.deepEqual(actual, [2, 3]);
      assert.deepEqual(array, [1, 'A', 'B', 4, 5]);
    });

    it('cut 1 item and add 2 items when -2 to 1', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.splice(-2, 1, undefined, null);
      assert.deepEqual(actual, [4]);
      assert.deepEqual(array, [1, 2, 3, undefined, null, 5]);
    });

    describe('empty array', () => {
      it('add 2 items', () => {
        const array = [];
        const actual = array.splice(1, 2, 'A', 'B');
        assert.deepEqual(actual, []);
        assert.deepEqual(array, ['A', 'B']);
      });
    });

    describe('sparse array', () => {
      it('cut 1 items and add 2 items when 2 to 1', () => {
        const array = Array(5);
        const actual = array.splice(2, 1, 1, 1);
        assert.deepEqual(actual, [,]);
        assert.deepEqual(array, [, , 1, 1, , ,]);
      });

      it('cut 2 items and add 2 when 2 to 2 with sparse and a value', () => {
        const array = [, 1, , 4, ,];
        const actual = array.splice(2, 2, 'a', undefined);
        assert.deepEqual(actual, [, 4]);
        assert.deepEqual(array, [, 1, 'a', undefined, ,]);
      });
    });
  });
});
