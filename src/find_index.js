Array.prototype.findIndex = function(callback, thisArgs) {
  return Array.from(this).reduce(
    (acc, cur, index, array) =>
      acc < 0 && callback.call(thisArgs, cur, index, array) ? index : acc,
    -1
  );
};
