// https://docs.ruby-lang.org/ja/latest/method/Array/i/empty=3f.html

require('../src/is_empty');
const { assert } = require('chai');

describe('isEmpty', () => {
  it('return true', () => {
    const array = [];
    const actual = array.isEmpty();
    assert.isTrue(actual);
  });

  it('return false', () => {
    const array = [1, 2];
    const actual = array.isEmpty();
    assert.isFalse(actual);
  });

  describe('sparse arrays', () => {
    it('sparse arrays is not empty.', () => {
      const array = [, , , ,];
      const actual = array.isEmpty();
      assert.isFalse(actual);
    });
  });

  describe('null arrays', () => {
    it('null arrays is not empty.', () => {
      const array = [null, null, null];
      const actual = array.isEmpty();
      assert.isFalse(actual);
    });
  });

  describe('undefined arrays', () => {
    it('undefined arrays is not empty.', () => {
      const array = [undefined, undefined, undefined];
      const actual = array.isEmpty();
      assert.isFalse(actual);
    });
  });
});
