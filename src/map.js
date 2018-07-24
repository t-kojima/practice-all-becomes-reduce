Array.prototype.map = function(callback, thisArgs) {
  const list = array => Array.from(Array(array.length));

  const push = (acc, cur, index, array) => {
    if (index in array) {
      acc[acc.length] = cur;
    } else {
      acc.length += 1;
    }
  };

  return list(this).reduce((acc, cur, index, array) => {
    push(acc, callback.call(thisArgs, this[index], index, array), index, this);
    return acc;
  }, []);
};
