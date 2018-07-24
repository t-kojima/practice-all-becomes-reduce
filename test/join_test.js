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

  describe('empty array', () => {
    it('return empty', () => {
      const array = [];
      const actual = array.join();
      assert.equal(actual, '');
    });

    it('return empty when separator is "and"', () => {
      const array = [];
      const actual = array.join('and');
      assert.equal(actual, '');
    });
  });

  describe('sparse array', () => {
    it('return empty when all sparse', () => {
      const array = Array(10);
      const actual = array.join();
      assert.equal(actual, ',,,,,,,,,');
    });

    it('return joined empty when all sparse and separator is " and "', () => {
      const array = Array(3);
      const actual = array.join(' and ');
      assert.equal(actual, ' and  and ');
    });

    it('return joined value', () => {
      const array = [, 1, 2, , , 5, 6, , , 9];
      const actual = array.join();
      assert.equal(actual, ',1,2,,,5,6,,,9');
    });
  });
});
