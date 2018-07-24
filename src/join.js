Array.prototype.join = function(separator = ',') {
  const list = array => Array.from(Array(array.length));

  const value = v => (v === undefined || v === null ? '' : v);

  // 空配列は空文字列を返す
  if (this.length === 0) return '';

  // 疎の要素をundefinedに変換した配列にする
  const array = list(this).reduce((acc, cur, index) => {
    acc[index] = index in this ? this[index] : undefined;
    return acc;
  }, []);

  return array.reduce((acc, cur) => value(acc) + separator + value(cur));
};
