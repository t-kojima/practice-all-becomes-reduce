Array.prototype.findIndex = function(callback, thisArgs) {
  const copy = this.reduce((acc, cur) => {
    acc[acc.length] = cur;
    return acc;
  }, []);
  return copy.reduce(
    (acc, cur, index, array) =>
      acc < 0 && callback.call(thisArgs, cur, index, array) ? index : acc,
    -1
  );
};
