/* eslint-disable array-callback-return, no-param-reassign */
const concat = (...args) =>
  args.reduce((acc, array) => {
    Array.from(array).reduce((_, cur, index) => {
      if (index in array) {
        acc[acc.length] = array[index];
      } else {
        acc.length += 1;
      }
    }, null);
    return acc;
  }, []);

const push = (from, to, index) => {
  if (index in from) {
    to[to.length] = from[index];
  } else {
    to.length += 1;
  }
};

const quickSort = (array, compare) => {
  if (array.length < 1) return array;
  // 後でconcatする為配列で保持
  const pivot = 0 in array ? [array[0]] : [,];
  const [left, right] = Array.from(array).reduce(
    (acc, cur, index) => {
      if (index !== 0) {
        // プロパティ有 & compareが0以下ならright
        const idx =
          0 in pivot && compare.call(undefined, pivot[0], array[index]) <= 0;
        push(array, acc[Number(idx)], index);
      }
      return acc;
    },
    [[], []] // [[left], [right]] を返す
  );
  return concat(quickSort(left, compare), pivot, quickSort(right, compare));
};

Array.prototype.sort = function(compare) {
  const sorted = quickSort(this, (x, y) => {
    if (x === undefined || y === undefined) {
      return (x === undefined ? 1 : 0) + (y === undefined ? -1 : 0);
    }
    if (compare) {
      const v = Number(compare.call(undefined, x, y));
      return Number.isNaN(v) ? 0 : v;
    }
    return (String(x) > String(y) ? 1 : 0) + (String(x) < String(y) ? -1 : 0);
  });

  this.length = 0;

  return Array.from(sorted).reduce((acc, cur, index) => {
    push(sorted, acc, index);
    return acc;
  }, this);
};

// reference: https://www.codereading.com/algo_and_ds/algo/quick_sort.html
