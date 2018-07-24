require('../src/for_each');
const { assert } = require('chai');

describe('forEach', () => {
  it('return undefined', () => {
    const array = [1, 2, 3, 4];
    const actual = array.forEach(value => value);
    assert.isUndefined(actual);
  });

  it('return same', () => {
    const array = [1, 2, 3, 4];
    const actual = [];
    array.forEach(value => actual.push(value));
    assert.deepEqual(actual, [1, 2, 3, 4]);
  });

  it('return 3 elements when use shift', () => {
    const words = ['one', 'two', 'three', 'four'];
    const actual = [];
    words.forEach(word => {
      actual.push(word);
      if (word === 'two') {
        words.shift();
      }
    });
    assert.deepEqual(actual, ['one', 'two', 'four']);
  });

  describe('set thisArg at 1', () => {
    it('return add 1', () => {
      const array = [1, 2, 3, 4];
      const actual = [];
      array.forEach(function(value) {
        return actual.push(value + this);
      }, 1);
      assert.deepEqual(actual, [2, 3, 4, 5]);
    });

    it('return add {} when use Arrow Function', () => {
      const array = [1, 3, 5, 7];
      const actual = [];
      array.forEach(value => actual.push(value + this), 1);
      assert.deepEqual(actual, [
        '1[object Object]',
        '3[object Object]',
        '5[object Object]',
        '7[object Object]',
      ]);
    });
  });

  describe('empty array', () => {
    it('no loop', () => {
      const array = [];
      const actual = [];
      array.forEach(() => actual.push(0));
      assert.deepEqual(actual, []);
    });
  });

  describe('sparse array', () => {
    it('no loop', () => {
      const array = Array(5);
      const actual = [];
      array.forEach(() => actual.push(0));
      assert.deepEqual(actual, []);
    });

    it('no sparse values', () => {
      const array = [, , 2, , , 5];
      const actual = [];
      array.forEach(value => actual.push(value));
      assert.deepEqual(actual, [2, 5]);
    });
  });

  it('loop falsy values', () => {
    const array = [1, 3, 5, null, , undefined, false, 7];
    const actual = [];
    array.forEach(value => actual.push(value));
    assert.deepEqual(actual, [1, 3, 5, null, undefined, false, 7]);
  });
});
