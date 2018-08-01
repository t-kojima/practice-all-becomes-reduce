Array.prototype.toLocaleString = function() {
  const value = v => (v === undefined || v === null ? '' : v);

  // 空配列は空文字列を返す
  if (this.length === 0) return '';

  const copy = Array.from(this).reduce((acc, cur, index) => {
    acc[index] = value(cur).toLocaleString();
    return acc;
  }, []);

  return copy.reduce((acc, cur) => `${acc},${cur}`);
};
