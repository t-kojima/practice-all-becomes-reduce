require('../src/sort');
const { assert } = require('chai');

describe('sort', () => {
  it('sort default', () => {
    const array = [1, 4, 2, 0, 9, 3];
    const actual = array.sort();
    assert.deepEqual(actual, [0, 1, 2, 3, 4, 9]);
  });

  it('sort asc', () => {
    const array = [1, 4, 2, 0, 9, 3];
    const actual = array.sort((a, b) => a - b);
    assert.deepEqual(actual, [0, 1, 2, 3, 4, 9]);
  });

  it('sort desc', () => {
    const array = [1, 4, 2, 0, 9, 3];
    const actual = array.sort((a, b) => b - a);
    assert.deepEqual(actual, [9, 4, 3, 2, 1, 0]);
  });

  it('sort default with falsy values', () => {
    const array = [1, undefined, 'z', 2, 'a', 0, null];
    const actual = array.sort();
    assert.deepEqual(actual, [0, 1, 2, 'a', null, 'z', undefined]);
  });

  it('sort asc with falsy values', () => {
    const array = [1, undefined, 'z', 2, 'a', 0, null];
    const actual = array.sort((a, b) => a - b);
    // assert.deepEqual(actual, [null, 1, 'z', 2, 'a', 0, undefined]);
    assert.deepEqual(actual, [0, null, 1, 'z', 2, 'a', undefined]);
  });

  it('sort desc with falsy values', () => {
    const array = [1, undefined, 'z', 2, 'a', 0, null];
    const actual = array.sort((a, b) => b - a);
    // assert.deepEqual(actual, [1, null, 'z', 2, 'a', 0, undefined]);
    assert.deepEqual(actual, [2, 1, 'z', 'a', 0, null, undefined]);
  });

  it('is destructive', () => {
    const array = [1, 4, 2, 0, 9, 3];
    array.sort((a, b) => b - a);
    assert.deepEqual(array, [9, 4, 3, 2, 1, 0]);
  });

  describe('not ascii', () => {
    it('sort asc', () => {
      const array = [
        'réservé',
        'premier',
        'cliché',
        'communiqué',
        'café',
        'adieu',
      ];
      const actual = array.sort((a, b) => a.localeCompare(b));
      assert.deepEqual(actual, [
        'adieu',
        'café',
        'cliché',
        'communiqué',
        'premier',
        'réservé',
      ]);
    });
  });

  describe('empty array', () => {
    it('same array', () => {
      const array = [];
      const actual = array.sort();
      assert.deepEqual(actual, []);
    });
  });

  describe('sparse array', () => {
    it('same array when all sparse', () => {
      const array = Array(5);
      const actual = array.sort();
      assert.deepEqual(actual, Array(5));
    });

    it('sort when sparse and values', () => {
      const array = [, 8, , 4, , 7];
      const actual = array.sort();
      assert.deepEqual(actual, [4, 7, 8, , , ,]);
    });

    it('sort when sparse, values and undefined', () => {
      const array = [, 8, , undefined, 4, , 7];
      const actual = array.sort();
      assert.deepEqual(actual, [4, 7, 8, undefined, , , ,]);
      assert.isTrue(3 in actual);
      assert.isFalse(4 in actual);
      assert.isFalse(5 in actual);
      assert.isFalse(6 in actual);
    });
  });
});
