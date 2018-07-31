// https://docs.ruby-lang.org/ja/latest/method/Array/i/=5b=5d.html
// https://msdn.microsoft.com/ja-jp/library/bb299233.aspx

require('../src/at');
const { assert, expect } = require('chai');

describe('at', () => {
  it('get element if index < length', () => {
    const array = [1, 2, 3];
    const actual = array.at(1);
    assert.equal(actual, 2);
  });

  it('get element if index < 0', () => {
    const array = [1, 2, 3];
    const actual = array.at(-1);
    assert.equal(actual, 3);
  });

  it('undefined if index >= length', () => {
    const array = [1, 2, 3];
    const actual = array.at(3);
    assert.isUndefined(actual);
  });

  it('is not destructive', () => {
    const array = [1, 2, 3];
    array.at(1);
    assert.deepEqual(array, [1, 2, 3]);
  });

  it('undefined if index +overflow', () => {
    const array = [1, 2, 3];
    const actual = array.at(3);
    assert.isUndefined(actual);
  });

  it('get first if index -overflow', () => {
    const array = [1, 2, 3];
    const actual = array.at(-4);
    assert.equal(actual, 1);
  });

  describe('empty array', () => {
    it('return undefined', () => {
      const array = [];
      const actual = array.at(1);
      assert.isUndefined(actual);
    });
  });

  describe('sparse arrays', () => {
    it('sparse return undefined', () => {
      const array = [, , , ,];
      const actual = array.at(1);
      assert.isUndefined(actual);
    });
  });

  describe('null arrays', () => {
    it('return null', () => {
      const array = [null, null, null];
      const actual = array.at(1);
      assert.isNull(actual);
    });
  });

  describe('undefined arrays', () => {
    it('return undefined', () => {
      const array = [undefined, undefined, undefined];
      const actual = array.at(1);
      assert.isUndefined(actual);
    });
  });

  describe('args is not number', () => {
    it('can convert Number', () => {
      const array = [1, 2, 3, 4, 5];
      const actual = array.at(true);
      assert.equal(actual, 2);
    });

    it('throw Error if can not convert Number', () => {
      const array = [1, 2, 3, 4, 5];
      expect(() => array.at('a')).to.throw(TypeError);
    });
  });
});
