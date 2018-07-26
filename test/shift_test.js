require('../src/shift');
const { assert } = require('chai');

describe('shift', () => {
  it('return first element', () => {
    const array = ['one', 'two', 'three'];
    const actual = array.shift2();
    assert.equal(actual, 'one');
  });

  it('is destructive', () => {
    const array = ['one', 'two', 'three'];
    array.shift2();
    assert.deepEqual(array, ['two', 'three']);
  });

  it('change length', () => {
    const array = ['one', 'two', 'three'];
    array.shift2();
    assert.equal(array.length, 2);
  });

  describe('empty array', () => {
    it('return undefined', () => {
      const array = [];
      const actual = array.shift2();
      assert.isUndefined(actual);
    });
  });

  describe('undefined', () => {
    it('return first element', () => {
      const array = [undefined, 1, undefined];
      array.shift2();
      assert.deepEqual(array, [1, undefined]);
    });
  });

  describe('sparse array', () => {
    it('shift undefined', () => {
      const array = Array(10);
      const actual = array.shift2();
      assert.isUndefined(actual);
    });

    it('is destructive', () => {
      const array = Array(10);
      array.shift2();
      assert.deepEqual(array, Array(9));
    });

    it('shift first sparse', () => {
      const array = [, , , , 4, , , , , ,];
      array.shift2();
      assert.deepEqual(array, [, , , 4, , , , , ,]);
      assert.isFalse(0 in array);
      assert.isFalse(1 in array);
      assert.isFalse(2 in array);
      assert.isFalse(4 in array);
      assert.isFalse(5 in array);
      assert.isFalse(6 in array);
      assert.isFalse(7 in array);
    });
  });
});
