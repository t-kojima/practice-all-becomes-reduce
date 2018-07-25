require('../src/reverse');
const { assert } = require('chai');

describe('reverse', () => {
  it('reverse', () => {
    const array = [1, 2, 3, 4, 5];
    const actual = array.reverse();
    assert.deepEqual(actual, [5, 4, 3, 2, 1]);
  });

  it('is destructive', () => {
    const array = [1, 2, 3, 4, 5];
    array.reverse();
    assert.deepEqual(array, [5, 4, 3, 2, 1]);
  });

  describe('empty array', () => {
    it('not work', () => {
      const array = [];
      array.reverse();
      assert.deepEqual(array, []);
    });
  });

  describe('sparse array', () => {
    it('not work when sparse all', () => {
      const array = Array(10);
      array.reverse();
      assert.deepEqual(array, Array(10));
    });

    it('reverse when sparse with a value', () => {
      const array = [, 1, , , ,];
      array.reverse();
      assert.deepEqual(array, [, , , 1, ,]);
    });
  });
});
