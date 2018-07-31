Array.prototype.at = function(idx) {
  if (Number.isNaN(Number(idx))) {
    throw TypeError();
  }
  const parse = value =>
    Math.min(
      Math.max(Number.parseInt(value, 10) + (value < 0 ? this.length : 0), 0),
      this.length
    );
  const i = parse(Number(idx));

  return Array.from(this).reduce(
    (acc, cur, index) => (index === i ? cur : acc),
    undefined
  );
};
