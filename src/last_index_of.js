Array.prototype.lastIndexOf = function(target, fromIndex = this.length) {
  const parse = value =>
    Math.min(
      Math.max(Number.parseInt(value, 10) + (value < 0 ? this.length : 0), -1),
      this.length
    );

  const findex = parse(fromIndex);

  return this.reduce(
    (acc, cur, index) => (index <= findex && cur === target ? index : acc),
    -1
  );
};
