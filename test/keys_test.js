require('../src/keys');
const { assert } = require('chai');

describe('keys', () => {
  it('called next() at 3 times', () => {
    const array = [1, 2, 3];
    const iterator = array.keys();
    assert.equal(iterator.next().value, 0);
    assert.equal(iterator.next().value, 1);
    assert.equal(iterator.next().value, 2);
    assert.equal(iterator.next().value, undefined);
    assert.equal(iterator.next().value, undefined);
  });

  it('can convert array using for...of', () => {
    const array = [1, 2, 3, 4, 5];
    const actual = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const value of array.keys()) {
      actual.push(value);
    }
    assert.deepEqual(actual, [0, 1, 2, 3, 4]);
  });

  it('can convert array using spread syntax', () => {
    const array = [1, 2, 3];
    const actual = [...array.keys()];
    assert.deepEqual(actual, [0, 1, 2]);
  });

  describe('empty array', () => {
    it('called next is undefined', () => {
      const array = [];
      const actual = array.keys();
      assert.equal(actual.next().value, undefined);
    });

    it('can convert empty array', () => {
      const array = [];
      const actual = [...array.keys()];
      assert.deepEqual(actual, []);
    });
  });

  describe('sprase array', () => {
    it('called next() at 2 times', () => {
      const array = [, ,];
      const actual = array.keys();
      assert.equal(actual.next().value, 0);
      assert.equal(actual.next().value, 1);
      assert.equal(actual.next().value, undefined);
    });

    it('can convert array using spread syntax', () => {
      const array = [, , , 4, ,];
      const actual = [...array.keys()];
      assert.deepEqual(actual, [0, 1, 2, 3, 4]);
    });
  });
});
