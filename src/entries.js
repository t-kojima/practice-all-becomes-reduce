Array.prototype.entries = function() {
  const value = index => (index in this ? this[index] : undefined);

  const iterator = this[Symbol.iterator]();
  let count = 0;
  iterator.next = () => {
    try {
      return Array.from(this).reduce(
        (acc, cur, index) =>
          count === index ? { value: [index, value(index)], done: false } : acc,
        { value: undefined, done: true }
      );
    } finally {
      count += 1;
    }
  };
  return iterator;
};
