require('../src/reduce_right');
const { assert, expect } = require('chai');

describe('reduceRight', () => {
  it('reverse', () => {
    const array = [1, 9, 3, 8, 5];
    const actual = array.reduceRight((acc, cur) => {
      acc.push(cur);
      return acc;
    }, []);
    assert.deepEqual(actual, [5, 8, 3, 9, 1]);
  });

  it('reverse to object', () => {
    const array = [1, 9, 3, 8, 5];
    const actual = array.reduceRight((acc, cur, index) => {
      acc[index] = cur;
      return acc;
    }, {});
    assert.deepEqual(actual, { '4': 5, '3': 8, '2': 3, '1': 9, '0': 1 });
  });

  it('sum', () => {
    const array = [1, 9, 3, 8, 5];
    const actual = array.reduceRight((acc, cur) => acc + cur);
    assert.equal(actual, 26);
  });

  it('sum with init', () => {
    const array = [1, 9, 3, 8, 5];
    const actual = array.reduceRight((acc, cur) => acc + cur, 4);
    assert.equal(actual, 30);
  });

  it('array args is same', () => {
    const array = [1, 9, 3, 8, 5];
    const actual = array.reduceRight((acc, cur, index, arr) => arr);
    assert.deepEqual(actual, [1, 9, 3, 8, 5]);
  });

  it('is not destructive', () => {
    const array = [1, 9, 3, 8, 5];
    array.reduceRight((acc, cur) => {
      acc.push(cur);
      return acc;
    }, []);
    assert.deepEqual(array, [1, 9, 3, 8, 5]);
  });

  it('shallow copy', () => {
    const array = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const actual = array.reduceRight((acc, cur) => {
      acc.push(cur);
      return acc;
    }, []);
    array[0].a = 4;
    assert.deepEqual(actual, [{ c: 3 }, { b: 2 }, { a: 4 }]);
  });

  describe('empty array', () => {
    it('return init value when set init value', () => {
      const array = [];
      const actual = array.reduceRight((acc, cur) => acc + cur, undefined);
      assert.isUndefined(actual);
    });

    it('throw error when not set init value', () => {
      const array = [];
      expect(() => array.reduceRight((acc, cur) => acc + cur)).to.throw(
        TypeError
      );
    });
  });

  describe('sparse array', () => {
    it('skip all sparse', () => {
      const array = Array(10);
      const actual = array.reduceRight((acc, cur, index) => acc + index, 0);
      assert.equal(actual, 0);
    });

    it('skip sparse with a value', () => {
      const array = [, , , , , 5, , , , ,];
      const actual = array.reduceRight((acc, cur, index) => acc + index, 0);
      assert.equal(actual, 5);
    });
  });

  describe('no args', () => {
    it('throw TypeError', () => {
      const array = [1, 2, 3];
      expect(() => array.reduceRight()).to.throw(TypeError);
    });
  });
});
