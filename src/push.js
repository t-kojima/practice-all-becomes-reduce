Array.prototype.push = function(...args) {
  return args.reduce((acc, cur) => {
    this[this.length] = cur;
    return this.length;
  }, 0);
};
