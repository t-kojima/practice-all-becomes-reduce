Array.prototype.unshift = function(...elements) {
  const copy = this.reduce((acc, cur, index) => {
    acc[index] = cur;
    return acc;
  }, Array(this.length));

  this.length = 0;
  this.length = copy.length + elements.length;

  return copy.reduce(
    (acc, cur, index) => {
      this[index + elements.length] = copy[index];
      return acc;
    },
    elements.reduce((acc, cur, index) => {
      this[index] = cur;
      return acc;
    }, copy.length + elements.length)
  );
};
