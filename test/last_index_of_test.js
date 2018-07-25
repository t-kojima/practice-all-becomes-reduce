require('../src/last_index_of');
const { assert } = require('chai');

describe('lastIndexOf', () => {
  it('found when includes a value', () => {
    const array = ['cat', 'dog', 'bat'];
    const actual = array.lastIndexOf('dog');
    assert.equal(actual, 1);
  });

  it('found when includes some values', () => {
    const array = ['cat', 'dog', 'bat', 'dog', 'bat'];
    const actual = array.lastIndexOf('dog');
    assert.equal(actual, 3);
  });

  it('not found when not includes', () => {
    const array = ['cat', 'dog', 'bat'];
    const actual = array.lastIndexOf('at');
    assert.equal(actual, -1);
  });

  describe('set fromIndex', () => {
    it('found when fromIndex 0', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.lastIndexOf('cat', 0);
      assert.equal(actual, 0);
    });

    it('found when fromIndex 2', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.lastIndexOf('bat', 2);
      assert.equal(actual, 2);
    });

    it('found when fromIndex length', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.lastIndexOf('bat', 3);
      assert.equal(actual, 2);
    });

    it('found when fromIndex +overflow', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.lastIndexOf('bat', 4);
      assert.equal(actual, 2);
    });

    it('not found when out of fromIndex', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.lastIndexOf('dog', 0);
      assert.equal(actual, -1);
    });

    it('found when fromIndex 2 and includes some values', () => {
      const array = ['cat', 'dog', 'bat', 'dog', 'bat'];
      const actual = array.lastIndexOf('dog', 2);
      assert.equal(actual, 1);
    });

    it('found when fromIndex 2.7', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.lastIndexOf('bat', 2.7);
      assert.equal(actual, 2);
    });

    it('found when fromIndex -1', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.lastIndexOf('bat', -1);
      assert.equal(actual, 2);
    });

    it('found when fromIndex -1.6', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.lastIndexOf('bat', -1.6);
      assert.equal(actual, 2);
    });

    it('found when fromIndex -3', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.lastIndexOf('cat', -3);
      assert.equal(actual, 0);
    });

    it('not found when findIndex -overflow', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.lastIndexOf('cat', -4);
      assert.equal(actual, -1);
    });
  });

  it('not found when includes NaN', () => {
    const array = [0, 1, 2, 3, NaN, 5];
    const actual = array.lastIndexOf(NaN);
    assert.equal(actual, -1);
  });

  it('found when includes undefined', () => {
    const array = [0, undefined, 2, 3, undefined, 5];
    const actual = array.lastIndexOf(undefined);
    assert.equal(actual, 4);
  });

  it('found when includes null', () => {
    const array = [0, 1, null, 3, null, 5];
    const actual = array.lastIndexOf(null);
    assert.equal(actual, 4);
  });

  describe('empty array', () => {
    it('not found undefined', () => {
      const array = [];
      const actual = array.lastIndexOf(undefined);
      assert.equal(actual, -1);
    });
  });

  describe('sparse array', () => {
    it('not found value when all sparse', () => {
      const array = Array(10);
      const actual = array.lastIndexOf(1);
      assert.equal(actual, -1);
    });

    it('not found undefined when all sparse', () => {
      const array = Array(10);
      const actual = array.lastIndexOf(undefined);
      assert.equal(actual, -1);
    });

    it('found value when sparse and values', () => {
      const array = [, , 1, 1, , , , 1, , ,];
      const actual = array.lastIndexOf(1);
      assert.equal(actual, 7);
    });
  });

  describe('no args', () => {
    it('return -1', () => {
      const array = [1, 2, 3];
      const actual = array.lastIndexOf();
      assert.equal(actual, -1);
    });
  });
});
