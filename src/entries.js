Array.prototype.entries = function() {
  const iterator = [];
  let count = 0;
  iterator.next = () => {
    try {
      return this.reduce(
        (acc, cur, index) =>
          count === index ? { value: [index, this[index]], done: false } : acc,
        { value: undefined, done: true }
      );
    } finally {
      count += 1;
    }
  };
  return iterator;
};
