/* eslint-disable array-callback-return */
Array.prototype.splice = function(idx = this.length, howMany, ...elements) {
  // 未指定の場合: this.length => 全て非対象
  // 不正な値(NaN)の場合: 0 => 全て対象
  // マイナスの値の場合: 末尾からのオフセット（に相当するインデックスに置換される）
  // 最大値: this.length, 最小値: 0
  const i =
    Math.min(
      Math.max(Number.parseInt(idx, 10) + (idx < 0 ? this.length : 0), 0),
      this.length
    ) || 0;
  // 未指定の場合: this.length - i => 全て対象
  // 不正な値(NaN)の場合: 0 => 全て非対象
  // 最大値: this.length - i, 最小値: 0
  const h =
    Math.min(
      Math.max(Number.parseInt(howMany || this.length - i, 10), 0),
      this.length - i
    ) || 0;

  // 配列のi位置にelementsを挿入した配列コピーを返す
  const copyWithElements = Array.from(
    Array(this.length + elements.length)
  ).reduce((acc, cur, index) => {
    if (index < i && index in this) {
      acc[index] = this[index];
    }
    if (index >= i && index < i + elements.length) {
      acc[index] = elements[index - i];
    }
    if (index >= i + elements.length && index - elements.length in this) {
      acc[index] = this[index - elements.length];
    }
    return acc;
  }, Array(this.length + elements.length));

  this.length = 0;
  this.length = copyWithElements.length - h;

  // index - i - elements.lengthからh個の要素を切り出す。
  // (事前にelementsを挿入しているので、elements.length分ズレる)
  return copyWithElements.reduce((acc, cur, index) => {
    if (index < i + elements.length) {
      this[index] = cur;
    }
    if (index >= i + elements.length && index < i + h + elements.length) {
      acc[index - i - elements.length] = cur;
    }
    if (index >= i + h + elements.length) {
      this[index - h] = cur;
    }
    return acc;
  }, Array(h));
};
