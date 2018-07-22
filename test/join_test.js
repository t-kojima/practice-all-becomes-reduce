require('../src/join');
const { assert } = require('chai');

describe('join', () => {
  it('return joined string', () => {
    const array = [1, 2, 3, 4];
    const actual = array.join();
    assert.equal(actual, '1,2,3,4');
  });

  it('return joined string when includes undefined', () => {
    const array = [1, 2, undefined, 4];
    const actual = array.join();
    assert.equal(actual, '1,2,,4');
  });

  it('return joined string when includes null', () => {
    const array = ['cat', 'dog', 'bat', null];
    const actual = array.join();
    assert.equal(actual, 'cat,dog,bat,');
  });

  it('return joined string when all undefined', () => {
    const array = [undefined, undefined, undefined, undefined];
    const actual = array.join();
    assert.equal(actual, ',,,');
  });

  it('return joined string when new array', () => {
    const array = Array(4);
    const actual = array.join();
    assert.equal(actual, ',,,');
  });

  it('return joined string when array with missing', () => {
    const array = [0, 1, , 3];
    const actual = array.join();
    assert.equal(actual, '0,1,,3');
  });

  it('return empty string when array length 0', () => {
    const array = [];
    const actual = array.join();
    assert.equal(actual, '');
  });

  describe('set separator', () => {
    it('return joined string when separator is " And "', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.join(' And ');
      assert.equal(actual, 'cat And dog And bat');
    });

    it('return joined string when separator is ""', () => {
      const array = ['cat', 'dog', 'bat'];
      const actual = array.join('');
      assert.equal(actual, 'catdogbat');
    });
  });
});
