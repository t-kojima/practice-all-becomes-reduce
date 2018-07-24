require('../src/map');
const { assert, expect } = require('chai');

describe('map', () => {
  it('value to double', () => {
    const array = [1, 2, 3, 4, 5];
    const actual = array.map(i => i * 2);
    assert.deepEqual(actual, [2, 4, 6, 8, 10]);
  });

  it('throw TypeError when not args', () => {
    const array = [1, 2, 3, 4, 5];
    expect(() => array.map()).to.throw(TypeError);
  });

  it('is destructive', () => {
    const array = [1, 2, 3, 4, 5];
    array.map(i => i * 2);
    assert.deepEqual(array, [1, 2, 3, 4, 5]);
  });

  it('shallow copy', () => {
    const array = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const actual = array.map(v => v);
    assert.deepEqual(actual, [{ a: 1 }, { b: 2 }, { c: 3 }]);
    array[0].a = 4;
    assert.deepEqual(actual, [{ a: 4 }, { b: 2 }, { c: 3 }]);
  });

  describe('set thisArg', () => {
    it('value to double', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.map(function(i) {
        return i * this;
      }, 2);
      assert.deepEqual(actual, [2, 4, 6, 8, 10]);
    });

    it('NaN array when use Arrow Function', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.map(i => i * this, 2);
      assert.deepEqual(actual, [NaN, NaN, NaN, NaN, NaN]);
    });
  });

  describe('empty array', () => {
    it('no loop', () => {
      const array = [];
      const actual = array.map(i => i * 2);
      assert.deepEqual(actual, []);
    });
  });

  describe('sparse array', () => {
    describe('all sparse', () => {
      it('sparse to sparse', () => {
        const array = Array(10);
        const actual = array.map(i => i * 2);
        assert.deepEqual(actual, [, , , , , , , , , ,]);
      });

      it('can not convert index', () => {
        const array = Array(3);
        const actual = array.map((value, index) => index);
        assert.deepEqual(actual, [, , ,]);
      });
    });

    describe('sparse and values', () => {
      it('add 1 value only', () => {
        const array = [, , 3, , 5, 6, ,];
        const actual = array.map(i => i + 1);
        assert.deepEqual(actual, [, , 4, , 6, 7, ,]);
      });

      it('can not convert index', () => {
        const array = [, , 3, , 5, 6, ,];
        const actual = array.map((value, index) => index);
        assert.deepEqual(actual, [, , 2, , 4, 5, ,]);
      });

      it('can not convert sparse', () => {
        const array = [, , 3, , 5, 6, ,];
        const actual = array.map(
          (value, index) => (index in array ? value : null)
        );
        assert.deepEqual(actual, [, , 3, , 5, 6, ,]);
      });
    });
  });
});
