Array.prototype.keys = function() {
  const list = array => Array.from(Array(array.length));

  const iterator = this[Symbol.iterator]();
  let count = 0;
  iterator.next = () => {
    try {
      return list(this).reduce(
        acc => (count < this.length ? { value: count, done: false } : acc),
        { value: undefined, done: true }
      );
    } finally {
      count += 1;
    }
  };
  return iterator;
};
