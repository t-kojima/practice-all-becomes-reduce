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

  describe('concat value', () => {
    it('concat number', () => {
      const array = [1, 2];
      const actual = array.concat(3);
      assert.deepEqual(actual, [1, 2, 3]);
    });

    it('concat number and array', () => {
      const array = [1, 2];
      const actual = array.concat(3, [4, 5]);
      assert.deepEqual(actual, [1, 2, 3, 4, 5]);
    });
  });

  describe('concat nested array', () => {
    it('nested array', () => {
      const array = [[1], 2];
      const actual = array.concat([[3]]);
      assert.deepEqual(actual, [[1], 2, [3]]);
    });
  });

  describe('concat array with shallow copy', () => {
    it('shallow copy', () => {
      const array = [{ a: 1 }, { b: 2 }];
      const actual = array.concat([{ c: 3 }]);
      assert.deepEqual(actual, [{ a: 1 }, { b: 2 }, { c: 3 }]);
      array[0].a = 4;
      assert.deepEqual(actual, [{ a: 4 }, { b: 2 }, { c: 3 }]);
    });
  });

  describe('empty array', () => {
    it('return empty with no args', () => {
      assert.deepEqual([].concat(), []);
    });

    it('return empty', () => {
      assert.deepEqual([].concat([]), []);
    });
  });

  describe('sparse array', () => {
    it('return sparse array when sparse receiver', () => {
      const actual = Array(2).concat([]);
      assert.deepEqual(actual, Array(2));
      assert.isFalse(Object.prototype.hasOwnProperty.call(actual, 0));
      assert.isFalse(Object.prototype.hasOwnProperty.call(actual, 1));
    });

    it('return sparse array includes 1', () => {
      const actual = [, 1, ,].concat([]);
      assert.deepEqual(actual, [, 1, ,]);
      assert.isFalse(Object.prototype.hasOwnProperty.call(actual, 0));
      assert.isTrue(Object.prototype.hasOwnProperty.call(actual, 1));
      assert.isFalse(Object.prototype.hasOwnProperty.call(actual, 2));
      assert.isFalse(Object.prototype.hasOwnProperty.call(actual, 3));
    });

    it('return sparse array when sparse arg', () => {
      const actual = [].concat(Array(3));
      assert.deepEqual(actual, Array(3));
      assert.isFalse(Object.prototype.hasOwnProperty.call(actual, 0));
      assert.isFalse(Object.prototype.hasOwnProperty.call(actual, 1));
      assert.isFalse(Object.prototype.hasOwnProperty.call(actual, 2));
    });

    it('return sparse array when sparse receiver and arg', () => {
      const actual = Array(2).concat(Array(3));
      assert.deepEqual(actual, Array(5));
      assert.isFalse(Object.prototype.hasOwnProperty.call(actual, 0));
      assert.isFalse(Object.prototype.hasOwnProperty.call(actual, 1));
      assert.isFalse(Object.prototype.hasOwnProperty.call(actual, 2));
      assert.isFalse(Object.prototype.hasOwnProperty.call(actual, 3));
      assert.isFalse(Object.prototype.hasOwnProperty.call(actual, 4));
    });

    it('return aparse array includes undefined', () => {
      const actual = [undefined].concat(Array(2), [undefined]);
      assert.deepEqual(actual, [undefined, , , undefined]);
      assert.isTrue(Object.prototype.hasOwnProperty.call(actual, 0));
      assert.isFalse(Object.prototype.hasOwnProperty.call(actual, 1));
      assert.isFalse(Object.prototype.hasOwnProperty.call(actual, 2));
      assert.isTrue(Object.prototype.hasOwnProperty.call(actual, 3));
    });
  });
});
