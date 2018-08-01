require('../src/to_string');
const { assert } = require('chai');

describe('toString', () => {
  it('string', () => {
    const array = ['a', 'b', 'c'];
    const actual = array.toString();
    assert.equal(actual, 'a,b,c');
  });

  it('number', () => {
    const array = [1, 2, 3];
    const actual = array.toString();
    assert.equal(actual, '1,2,3');
  });

  it('object', () => {
    const array = [{ a: 1, b: 2 }];
    const actual = array.toString();
    assert.equal(actual, '[object Object]');
  });

  it('date', () => {
    const array = [new Date('2018/08/01 12:10:40')];
    const actual = array.toString();
    assert.equal(
      actual,
      'Wed Aug 01 2018 12:10:40 GMT+0900 (Japan Standard Time)'
    );
  });

  it('is not destructive', () => {
    const array = [1, 2, 3];
    array.toString();
    assert.deepEqual(array, [1, 2, 3]);
  });

  describe('empty array', () => {
    it('return empty', () => {
      const array = [];
      const actual = array.toString();
      assert.equal(actual, '');
    });
  });

  describe('sparse array', () => {
    it('sparse to empty', () => {
      const array = [, , , 4];
      const actual = array.toString();
      assert.equal(actual, ',,,4');
    });
  });
});
