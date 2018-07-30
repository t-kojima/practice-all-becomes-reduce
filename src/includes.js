Array.prototype.includes = function(target, fromIndex = 0) {
  const parse = value =>
    Math.min(
      Math.max(Number.parseInt(value, 10) + (value < 0 ? this.length : 0), 0),
      this.length
    );

  const sameValueZero = (v1, v2) =>
    v1 === v2 || (Number.isNaN(v1) && Number.isNaN(v2));

  const findex = parse(fromIndex);

  return Array.from(this).reduce(
    (acc, cur, index) =>
      !acc && index >= findex && sameValueZero(this[index], target)
        ? true
        : acc,
    false
  );
};
