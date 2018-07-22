Array.prototype.indexOf = function(target, fromIndex = 0) {
  const parse = value => {
    if (value > this.length) return this.length;
    if (value + this.length < 0) return 0;
    return Number.parseInt(value, 10) + (value < 0 ? this.length : 0);
  };
  const findex = parse(fromIndex);

  return this.reduce(
    (acc, cur, index) =>
      acc === -1 && index >= findex && cur === target ? index : acc,
    -1
  );
};
