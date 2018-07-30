Array.prototype.toString = function() {
  const value = v => (v === undefined || v === null ? '' : v);

  // 空配列は空文字列を返す
  if (this.length === 0) return '';

  return Array.from(this).reduce(
    (acc, cur) => `${value(acc).toString()},${value(cur).toString()}`
  );
};
