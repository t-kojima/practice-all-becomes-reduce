Array.prototype.every = function(callback, thisArgs) {
  return this.reduce(
    (acc, cur, index, array) =>
      acc ? !!callback.call(thisArgs, cur, index, array) : acc,
    true
  );
};
