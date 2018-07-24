require('../src/push');
const { assert } = require('chai');

describe('push', () => {
  it('append a value', () => {
    const array = [1, 2, 3];
    array.push(4);
    assert.deepEqual(array, [1, 2, 3, 4]);
  });

  it('return length', () => {
    const array = [1, 2, 3];
    const actual = array.push(4);
    assert.equal(actual, 4);
  });

  it('shallow copy', () => {
    const array = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const value = { d: 4 };
    array.push(value);
    value.d = 5;
    assert.deepEqual(array, [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 5 }]);
  });

  describe('set 2 args', () => {
    it('append 2 values', () => {
      const array = [1, 2, 3];
      array.push(4, 5);
      assert.deepEqual(array, [1, 2, 3, 4, 5]);
    });
  });

  describe('set 3 args', () => {
    it('append 3 values', () => {
      const array = [1, 2, 3];
      array.push(4, 5, 6);
      assert.deepEqual(array, [1, 2, 3, 4, 5, 6]);
    });
  });

  describe('many arrays', () => {
    it('merge to array1', () => {
      const array1 = ['alice', 'bob'];
      const array2 = ['tomy', 'take'];
      Array.prototype.push.apply(array1, array2);
      assert.deepEqual(array1, ['alice', 'bob', 'tomy', 'take']);
    });

    it('merge to array1 with sparse', () => {
      const array1 = ['alice', 'bob'];
      const array2 = Array(2);
      Array.prototype.push.apply(array1, array2);
      assert.deepEqual(array1, ['alice', 'bob', , ,]);
    });
  });

  describe('empty array', () => {
    it('append a value', () => {
      const array = [];
      array.push('tomy');
      assert.deepEqual(array, ['tomy']);
    });
  });

  describe('sparse array', () => {
    it('append a value', () => {
      const array = Array(3);
      array.push('tomy');
      assert.deepEqual(array, [, , , 'tomy']);
    });
  });
});
