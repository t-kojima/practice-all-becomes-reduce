Array.prototype.slice = function(begin = 0, end = this.length) {
  const parse = value =>
    Math.min(
      Math.max(Number.parseInt(value, 10) + (value < 0 ? this.length : 0), 0),
      this.length
    );

  const b = parse(begin);
  const e = parse(end);

  const copy = Array.from(this).reduce((acc, cur, index) => {
    if (index in this) {
      acc[index] = cur;
    }
    return acc;
  }, Array(this.length));

  return Array.from(this).reduce((acc, cur, index) => {
    if (index >= b && index < e) {
      acc[acc.length] = copy[index];
    }
    return acc;
  }, []);
};
