Array.prototype.pop = function() {
  const list = array => Array.from(Array(array.length));
  try {
    return list(this).reduce((acc, cur, index) => this[index], undefined);
  } finally {
    if (this.length) this.length -= 1;
  }
};
