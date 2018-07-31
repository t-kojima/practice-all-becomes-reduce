Array.prototype.reverse = function() {
  const copy = this.reduce((acc, cur, index) => {
    acc[index] = cur;
    return acc;
  }, Array(this.length));

  this.length = 0;
  this.length = copy.length;

  return Array.from(copy).reduce((acc, cur, index) => {
    if (index in copy) {
      acc[copy.length - index - 1] = cur;
    }
    return acc;
  }, this);
};
