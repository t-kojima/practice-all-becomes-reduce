/* eslint-disable array-callback-return */
Array.prototype.concat = function(...args) {
  // 引数に値がある場合は配列に変換する。
  const arrays = args.reduce((acc, cur) => {
    acc[acc.length] = Array.isArray(cur) ? cur : [cur];
    return acc;
  }, []);

  return arrays.reduce(
    (acc, array) => {
      const len = acc.length;
      acc.length += array.length;
      array.reduce((_, cur, index) => {
        acc[len + index] = cur;
      }, null);
      return acc;
    },
    // initialValueとしてthisのコピーを渡す
    this.reduce((acc, cur, index) => {
      acc[index] = cur;
      return acc;
    }, Array(this.length))
  );
};
