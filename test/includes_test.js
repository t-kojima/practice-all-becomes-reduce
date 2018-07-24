require('../src/includes');
const { assert } = require('chai');

describe('includes', () => {
  it('return true when includes', () => {
    const array = ['cat', 'dog', 'bat'];
    const actual = array.includes('dog');
    assert.isTrue(actual);
  });

  it('return false when not includes', () => {
    const array = ['cat', 'dog', 'bat'];
    const actual = array.includes('at');
    assert.isFalse(actual);
  });

  describe('set fromIndex', () => {
    it('return true when fromIndex 2', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.includes('bat', 2);
      assert.isTrue(actual);
    });

    it('return true when fromIndex 2.7', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.includes('bat', 2.7);
      assert.isTrue(actual);
    });

    it('return false when fromIndex 3', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.includes('bat', 3);
      assert.isFalse(actual);
    });

    it('return false when +overflow', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.includes('bat', 4);
      assert.isFalse(actual);
    });

    it('return true when fromIndex -1', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.includes('bat', -1);
      assert.isTrue(actual);
    });

    it('return true when fromIndex -1.6', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.includes('bat', -1.6);
      assert.isTrue(actual);
    });

    it('return true when -overflow', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.includes('cat', -4);
      assert.isTrue(actual);
    });
  });

  it('return true when includes NaN', () => {
    const array = [0, 1, 2, 3, NaN, 5];
    const actual = array.includes(NaN);
    assert.isTrue(actual);
  });

  it('return true when includes undefined', () => {
    const array = [0, 1, 2, 3, undefined, 5];
    const actual = array.includes(undefined);
    assert.isTrue(actual);
  });

  it('return true when includes null', () => {
    const array = [0, 1, 2, 3, null, 5];
    const actual = array.includes(null);
    assert.isTrue(actual);
  });

  it('return true same value zero', () => {
    const array = [+0];
    const actual = array.includes(-0);
    assert.isTrue(actual);
  });

  describe('empty array', () => {
    it('return false', () => {
      const array = [];
      const actual = array.includes(1);
      assert.isFalse(actual);
    });
  });

  describe('sparse array', () => {
    it('return false when all sparse', () => {
      const array = Array(10);
      const actual = array.includes(1);
      assert.isFalse(actual);
    });

    it('return true when includes undefined', () => {
      const array = Array(10);
      const actual = array.includes(undefined);
      assert.isTrue(actual);
    });

    it('return true when includes value', () => {
      const array = [, , , , , , , 1, , ,];
      const actual = array.includes(1);
      assert.isTrue(actual);
    });
  });
});
