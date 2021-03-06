// Array.prototype.shift = にするとmochaが循環する。
Array.prototype.shift2 = function() {
  const copy = this.reduce((acc, cur, index) => {
    acc[index] = cur;
    return acc;
  }, Array(this.length));

  this.length = 0;
  this.length = copy.length ? copy.length - 1 : 0;

  return Array.from(this).reduce((acc, cur, index) => {
    if (index + 1 in copy) {
      this[index] = copy[index + 1];
    }
    return index === 0 ? copy[index] : acc;
  }, undefined);
};
