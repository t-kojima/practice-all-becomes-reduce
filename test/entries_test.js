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

  it('can called by for...of', () => {
    const array = [1, 2, 3, 4, 5];
    const iterator = array.entries();
    // eslint-disable-next-line no-restricted-syntax
    for (const i of iterator) {
      assert.deepEqual(i, [0, 1]);
      break;
    }
  });
});
