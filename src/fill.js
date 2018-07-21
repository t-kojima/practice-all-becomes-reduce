Array.prototype.fill = function(target, start = 0, end = this.length) {
  const parse = value => {
    if (value > this.length) return this.length;
    if (value + this.length < 0) return 0;
    return value < 0
      ? this.length + Number.parseInt(value, 10)
      : Number.parseInt(value, 10);
  };
  const s = parse(start);
  const e = parse(end);

  return this.reduce((acc, cur, index) => {
    if (index >= s && index < e) {
      acc[index] = target;
    }
    return acc;
  }, this);
};