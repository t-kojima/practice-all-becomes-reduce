Array.prototype.some = function(callback, thisArg) {
  return this.reduce(
    (acc, cur, index, array) =>
      !acc ? !!callback.call(thisArg, cur, index, array) : acc,
    false
  );
};
