Array.prototype.entries = function() {
  const list = array => Array.from(Array(array.length));
  const value = index => (index in this ? this[index] : undefined);

  const iterator = this[Symbol.iterator]();
  let count = 0;
  iterator.next = () => {
    try {
      return list(this).reduce(
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
