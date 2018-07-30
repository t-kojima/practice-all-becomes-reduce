Array.prototype.keys = function() {
  const iterator = this[Symbol.iterator]();
  let count = 0;
  iterator.next = () => {
    try {
      return Array.from(this).reduce(
        acc => (count < this.length ? { value: count, done: false } : acc),
        { value: undefined, done: true }
      );
    } finally {
      count += 1;
    }
  };
  return iterator;
};
