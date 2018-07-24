/* eslint-disable no-param-reassign */

/**
 * 長さが同じで要素がundefinedな配列を返す
 * 疎の配列の場合reduce of empty array回避の為
 */
const list = array => Array.from(Array(array.length));

/**
 * 配列(to)へ配列(from)のindex位置の要素をpushする。
 * index位置が疎要素の場合はlengthを拡張して対応
 * 疎要素を維持したままpushできる。
 */
const pushValue = (from, to, index) => {
  if (index in from) {
    to[to.length] = from[index];
  } else {
    to.length += 1;
  }
};

/**
 * 配列をコピーする。array.concat()と等価
 * array#concatが利用できないのでreduceで実装
 */
const clone = array =>
  list(array).reduce((acc, cur, index) => {
    pushValue(array, acc, index);
    return acc;
  }, []);

Array.prototype.copyWithin = function(target, start = 0, end = this.length) {
  const parse = value =>
    Math.min(
      Math.max(Number.parseInt(value, 10) + (value < 0 ? this.length : 0), 0),
      this.length
    );

  const t = parse(target);
  const s = parse(start);
  const e = parse(end);

  const copy = clone(this);

  this.length = 0;
  return list(copy).reduce((acc, cur, index) => {
    pushValue(
      copy,
      acc,
      index >= t && index < e - s + t ? s + index - t : index
    );
    return acc;
  }, this);
};
