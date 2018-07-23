Array.prototype.fill = function(target, start = 0, end = this.length) {
  const list = array => Array.from(Array(array.length));
  const parse = value =>
    Math.min(
      Math.max(Number.parseInt(value, 10) + (value < 0 ? this.length : 0), 0),
      this.length
    );

  const s = parse(start);
  const e = parse(end);

  return list(this).reduce((acc, cur, index) => {
    if (index >= s && index < e) {
      acc[index] = target;
    }
    return acc;
  }, this);
};
