/* eslint-disable array-callback-return */
Array.prototype.concat = function(...args) {
  const copy = Array.from(this);
  args.reduce((_, array) => {
    array.reduce((acc, cur) => {
      copy[copy.length] = cur;
    }, null);
  }, null);
  return copy;
};
