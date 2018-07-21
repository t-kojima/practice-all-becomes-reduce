Array.prototype.forEach = function(callback, thisArgs) {
  return this.reduce((acc, cur, index, array) => {
    callback.call(thisArgs, cur, index, array);
    return acc;
  }, undefined);
};
