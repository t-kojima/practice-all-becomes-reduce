Array.prototype.splice = function(idx, howMany = Infinity, ...elements) {
  const parse = value =>
    Math.min(
      Math.max(Number.parseInt(value, 10) + (value < 0 ? this.length : 0), 0),
      this.length
    );
  const i = parse(idx || this.length);
  const h = Number.parseInt(
    Math.min(Math.max(howMany, 0), this.length - i),
    10
  );
  // console.log(`${i} ${h}`);

  const copy = Array.from(this).reduce((acc, cur, index) => {
    if (index in this) {
      acc[index] = cur;
    }
    return acc;
  }, Array(this.length));

  this.length = 0;

  return Array.from(copy).reduce((acc, cur, index) => {
    if (index === i) {
      elements.reduce((_, element) => {
        this[this.length] = element;
      }, null);
    }
    if (index >= i && index < i + h) {
      if (index in copy) {
        acc[acc.length] = copy[index];
      } else {
        acc.length += 1;
      }
    } else if (index in copy) {
      this[this.length] = copy[index];
    } else {
      this.length += 1;
    }
    return acc;
  }, []);
};
