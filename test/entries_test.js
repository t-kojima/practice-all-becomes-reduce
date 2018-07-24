require('../src/entries');
const { assert } = require('chai');

describe('entries', () => {
  it('called next() at 7 times', () => {
    const array = [1, 2, 3, 4, 5];
    const iterator = array.entries();
    assert.deepEqual(iterator.next().value, [0, 1]);
    assert.deepEqual(iterator.next().value, [1, 2]);
    assert.deepEqual(iterator.next().value, [2, 3]);
    assert.deepEqual(iterator.next().value, [3, 4]);
    assert.deepEqual(iterator.next().value, [4, 5]);
    assert.equal(iterator.next().value, undefined);
    assert.equal(iterator.next().value, undefined);
  });

  it('can convert array using for...of', () => {
    const array = [1, 2, 3, 4, 5];
    const actual = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const value of array.entries()) {
      actual.push(value);
    }
    assert.deepEqual(actual, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]);
  });

  it('can convert array using spread syntax', () => {
    const array = [1, 2, 3, 4, 5];
    const actual = [...array.entries()];
    assert.deepEqual(actual, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]);
  });

  describe('empty array', () => {
    it('called next is undefined', () => {
      const array = [];
      const actual = array.entries();
      assert.equal(actual.next().value, undefined);
    });

    it('can convert empty array', () => {
      const array = [];
      const actual = [...array.entries()];
      assert.deepEqual(actual, []);
    });
  });

  describe('sprase array', () => {
    it('called next() at 2 times', () => {
      const array = [, ,];
      const actual = array.entries();
      assert.deepEqual(actual.next().value, [0, undefined]);
      assert.deepEqual(actual.next().value, [1, undefined]);
      assert.equal(actual.next().value, undefined);
    });

    it('can convert array using spread syntax', () => {
      const array = [, , , 4, ,];
      const actual = [...array.entries()];
      assert.deepEqual(actual, [
        [0, undefined],
        [1, undefined],
        [2, undefined],
        [3, 4],
        [4, undefined],
      ]);
    });
  });
});
