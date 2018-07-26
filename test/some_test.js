require('../src/some');
const { assert, expect } = require('chai');

describe('some', () => {
  it('return true', () => {
    const array = [1, 2, 3, 4, 5];
    const actual = array.some(i => i === 5);
    assert.isTrue(actual);
  });

  it('return false', () => {
    const array = [1, 2, 3, 4, 5];
    const actual = array.some(i => i > 5);
    assert.isFalse(actual);
  });

  it('is not destructive', () => {
    const array = [1, 2, 3, 4, 5];
    array.some(i => i === 5);
    assert.deepEqual(array, [1, 2, 3, 4, 5]);
  });

  describe('set args', () => {
    it('return true ', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.some(function(i) {
        return i + this >= 15;
      }, 10);
      assert.isTrue(actual);
    });

    it('return false when use Arrow Function', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.some(i => i + this >= 15, 10);
      assert.isFalse(actual);
    });
  });

  describe('no args', () => {
    it('throw error', () => {
      const array = [1, 2, 3, 4, 5];
      expect(array.some).to.throw(TypeError);
    });
  });

  describe('empty array', () => {
    it('return false', () => {
      const array = [];
      const actual = array.some(i => i);
      assert.isFalse(actual);
    });
  });

  describe('sparse array', () => {
    it('is not sparse === undefined', () => {
      const array = Array(5);
      const actual = array.some(i => i === undefined);
      assert.isFalse(actual);
    });

    it('return true with sparse and a value', () => {
      const array = [, , , , 4, ,];
      const actual = array.some(i => i);
      assert.isTrue(actual);
    });

    it('return true with sparse and undefined', () => {
      const array = [, , , , undefined, ,];
      const actual = array.some(i => i === undefined);
      assert.isTrue(actual);
    });
  });
});
