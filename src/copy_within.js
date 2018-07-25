Array.prototype.copyWithin = function(target, start = 0, end = this.length) {
  const parse = value =>
    Math.min(
      Math.max(Number.parseInt(value, 10) + (value < 0 ? this.length : 0), 0),
      this.length
    );

  const t = parse(target);
  const s = parse(start);
  const e = parse(end);

  const copy = Array.from(this).reduce((acc, cur, index) => {
    if (index in this) {
      acc[index] = cur;
    }
    return acc;
  }, Array(this.length));

  this.length = 0; // this = Array(copy.length) だとエラーになるので
  this.length = copy.length;

  return Array.from(copy).reduce((acc, cur, index) => {
    const copyIndex = index >= t && index < e - s + t ? s + index - t : index;
    if (copyIndex in copy) {
      acc[index] = copy[copyIndex];
    }
    return acc;
  }, this);
};
