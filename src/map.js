Array.prototype.map = function(callback, thisArgs) {
  return this.reduce((acc, cur, index, array) => {
    acc[index] = callback.call(thisArgs, cur, index, array);
    return acc;
  }, Array(this.length));
};
