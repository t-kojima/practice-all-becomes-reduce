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

  it('return true when includes isNaN', () => {
    const array = [0, 1, 2, 3, NaN, 5];
    const actual = array.includes(NaN);
    assert.isTrue(actual);
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
});
