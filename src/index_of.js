Array.prototype.indexOf = function(target, fromIndex = 0) {
  const parse = value =>
    Math.min(
      Math.max(Number.parseInt(value, 10) + (value < 0 ? this.length : 0), 0),
      this.length
    );

  const findex = parse(fromIndex);

  return this.reduce(
    (acc, cur, index) =>
      acc === -1 && index >= findex && cur === target ? index : acc,
    -1
  );
};
