Array.prototype.reduceRight = function(...args) {
  const reverse = Array.from(this).reduce((acc, cur, index) => {
    if (index in this) {
      acc[this.length - index - 1] = cur;
    }
    return acc;
  }, Array(this.length));

  const callback = (acc, cur, index) =>
    args[0].call(this, acc, cur, this.length - index - 1, this);

  return args.length > 1
    ? reverse.reduce(callback, args[1])
    : reverse.reduce(callback);
};
