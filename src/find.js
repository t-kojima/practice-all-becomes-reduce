Array.prototype.find = function(callback, thisArgs) {
  return this.reduce(
    (acc, cur, index, array) =>
      acc === undefined && callback.call(thisArgs, cur, index, array)
        ? cur
        : acc,
    undefined
  );
};
