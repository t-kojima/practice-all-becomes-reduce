Array.prototype.pop = function() {
  try {
    return Array.from(this).reduce((acc, cur, index) => this[index], undefined);
  } finally {
    if (this.length) this.length -= 1;
  }
};
