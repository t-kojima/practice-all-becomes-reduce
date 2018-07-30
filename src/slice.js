Array.prototype.slice = function(begin = 0, end = this.length) {
  const parse = value =>
    Math.min(
      Math.max(Number.parseInt(value, 10) + (value < 0 ? this.length : 0), 0),
      this.length
    );

  const b = parse(begin);
  const e = parse(end);

  return this.reduce((acc, cur, index) => {
    if (index >= b && index < e) {
      acc[index - b] = cur;
    }
    return acc;
  }, Array(e - b));
};
