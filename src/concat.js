/* eslint-disable array-callback-return, no-param-reassign */
Array.prototype.concat = function(...args) {
  const list = array => Array.from(Array(array.length));
  const pushValue = (from, to, index) => {
    if (index in from) {
      to[to.length] = from[index];
    } else {
      to.length += 1;
    }
  };

  /**
   * thisを破壊しない為、コピー配列に結果を入れていく。
   * 疎要素のコピーとreduce of empty array回避の為、
   * 同じ長さの配列を用意してreduceしてコピーする。
   */
  const copy = list(this).reduce((acc, cur, index) => {
    pushValue(this, acc, index);
    return acc;
  }, []);

  // 引数に値がある場合は配列に変換する。
  const arrays = args.reduce((acc, cur) => {
    acc[acc.length] = Array.isArray(cur) ? cur : [cur];
    return acc;
  }, []);

  arrays.reduce((_, array) => {
    list(array).reduce((acc, cur, index) => {
      pushValue(array, copy, index);
    }, null);
  }, null);
  return copy;
};
