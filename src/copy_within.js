Array.prototype.copyWithin = function(target, start = 0, end = this.length) {
  const copy = Array.from(this);
  const parse = value => {
    if (value > this.length) return this.length;
    if (value + this.length < 0) return 0;
    return value < 0
      ? this.length + Number.parseInt(value, 10)
      : Number.parseInt(value, 10);
  };
  const t = parse(target);
  const s = parse(start);
  const e = parse(end);

  return this.reduce((acc, cur, index) => {
    if (index >= t && index < e - s + t) {
      acc[index] = copy[s + index - t];
    }
    return acc;
  }, this);
};
