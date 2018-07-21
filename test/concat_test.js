require('../src/concat');
const { assert } = require('chai');

describe('concat', () => {
  it('concat 2 arrays', () => {
    const array = [1, 2, 3, 4];
    const actual = array.concat([5, 6, 7, 8]);
    assert.deepEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('concat 3 arrays', () => {
    const array = [1, 2, 3];
    const actual = array.concat([4, 5, 6], [7, 8]);
    assert.deepEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('concat 4 arrays', () => {
    const array = [1, 2];
    const actual = array.concat([3, 4], [5, 6], [7, 8]);
    assert.deepEqual(actual, [1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('is not destructive', () => {
    const array = [1, 2, 3, 4];
    array.concat([5, 6, 7, 8]);
    assert.deepEqual(array, [1, 2, 3, 4]);
  });
});
