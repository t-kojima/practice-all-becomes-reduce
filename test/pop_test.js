require('../src/pop');
const { assert } = require('chai');

describe('pop', () => {
  it('return last element', () => {
    const array = ['one', 'two', 'three'];
    const actual = array.pop();
    assert.equal(actual, 'three');
  });

  it('is destructive', () => {
    const array = ['one', 'two', 'three'];
    array.pop();
    assert.deepEqual(array, ['one', 'two']);
  });

  it('change length', () => {
    const array = ['one', 'two', 'three'];
    array.pop();
    assert.equal(array.length, 2);
  });

  describe('empty array', () => {
    it('return undefined', () => {
      const array = [];
      const actual = array.pop();
      assert.isUndefined(actual);
    });
  });

  describe('sparse array', () => {
    it('pop undefined', () => {
      const array = Array(10);
      const actual = array.pop();
      assert.isUndefined(actual);
    });

    it('is destructive', () => {
      const array = Array(10);
      array.pop();
      assert.deepEqual(array, Array(9));
    });

    it('pop last sparse', () => {
      const array = [, , , , 4, , , , , ,];
      array.pop();
      assert.deepEqual(array, [, , , , 4, , , , ,]);
    });
  });
});
