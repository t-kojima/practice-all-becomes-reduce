Array.prototype.filter = function(callback, thisArgs) {
  return this.reduce((acc, cur, index, array) => {
    if (callback.call(thisArgs, cur, index, array)) {
      acc[acc.length] = cur;
    }
    return acc;
  }, []);
};
