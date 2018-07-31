Array.prototype.isEmpty = function() {
  return Array.from(this).reduce((acc, cur, index) => acc + index, 0) === 0;
};
