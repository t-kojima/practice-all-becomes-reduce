/* eslint-disable array-callback-return */
Array.prototype.concat = function(array) {
  const copy = Array.from(this);
  array.reduce((acc, cur) => {
    copy.push(cur);
  }, []);
  return copy;
};
