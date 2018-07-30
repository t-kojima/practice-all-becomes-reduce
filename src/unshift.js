Array.prototype.unshift = function(...elements) {
  const copy = Array.from(this).reduce((acc, cur, index) => {
    if (index in this) {
      acc[index] = cur;
    }
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
