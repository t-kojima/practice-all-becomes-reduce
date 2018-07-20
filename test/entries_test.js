require('../src/entries');
const { assert } = require('chai');

describe('entries', () => {
  it('do', () => {
    const array = [1, 2, 3, 4, 5];
    const iterator = array.entries();
    assert.equal(iterator.next().value, 1);
    assert.equal(iterator.next().value, 2);
    assert.equal(iterator.next().value, 3);
  });
});
