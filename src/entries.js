Array.prototype.entries = function() {
  // const iterator = this[Symbol.iterator]();
  const iterator = {};
  let count = 0;
  iterator.next = () =>
    this.reduce((acc, cur, index) => {
      if (count === index) {
        acc.push({ value: this[index], done: false });
        count += 1;
      }
      return acc;
    }, [])[0];
  return iterator;
};

// const array = [1, 2, 3, 4, 5]
// // console.log(array.entries())
// const ite = array.entries();
// console.log(ite.next)
