require('../src/index_of');
const { assert } = require('chai');

describe('indexOf', () => {
  it('return 1 when includes', () => {
    const array = ['cat', 'dog', 'bat'];
    const actual = array.indexOf('dog');
    assert.equal(actual, 1);
  });

  it('return -1 when not includes', () => {
    const array = ['cat', 'dog', 'bat'];
    const actual = array.indexOf('at');
    assert.equal(actual, -1);
  });

  describe('set fromIndex', () => {
    it('return 2 when fromIndex 2', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.indexOf('bat', 2);
      assert.equal(actual, 2);
    });

    it('return 2 when fromIndex 2.7', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.indexOf('bat', 2.7);
      assert.equal(actual, 2);
    });

    it('return -1 when fromIndex 3', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.indexOf('bat', 3);
      assert.equal(actual, -1);
    });

    it('return -1 when +overflow', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.indexOf('bat', 4);
      assert.equal(actual, -1);
    });

    it('return 2 when fromIndex -1', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.indexOf('bat', -1);
      assert.equal(actual, 2);
    });

    it('return 2 when fromIndex -1.6', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.indexOf('bat', -1.6);
      assert.equal(actual, 2);
    });

    it('return 0 when -overflow', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.indexOf('cat', -4);
      assert.equal(actual, 0);
    });
  });

  it('return -1 when includes NaN', () => {
    const array = [0, 1, 2, 3, NaN, 5];
    const actual = array.indexOf(NaN);
    assert.equal(actual, -1);
  });

  it('return 4 when includes undefined', () => {
    const array = [0, 1, 2, 3, undefined, 5];
    const actual = array.indexOf(undefined);
    assert.equal(actual, 4);
  });

  it('return 4 when includes null', () => {
    const array = [0, 1, 2, 3, null, 5];
    const actual = array.indexOf(null);
    assert.equal(actual, 4);
  });

  describe('empty array', () => {
    it('return -1', () => {
      const array = [];
      const actual = array.indexOf(undefined);
      assert.equal(actual, -1);
    });
  });

  describe('sparse array', () => {
    it('return -1 when all sparse', () => {
      const array = Array(10);
      const actual = array.indexOf(1);
      assert.equal(actual, -1);
    });

    it('return -1 when includes undefined', () => {
      const array = Array(10);
      const actual = array.indexOf(undefined);
      assert.equal(actual, -1);
    });

    it('return 7 when includes value', () => {
      const array = [, , , , , , , 1, , ,];
      const actual = array.indexOf(1);
      assert.equal(actual, 7);
    });
  });

  describe('no args', () => {
    it('return -1', () => {
      const array = [1, 2, 3];
      const actual = array.indexOf();
      assert.equal(actual, -1);
    });
  });
});
