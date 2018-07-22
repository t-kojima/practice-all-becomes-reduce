Array.prototype.join = function(separator = ',') {
  if (!Object.prototype.hasOwnProperty.call(this, 0) && this.length === 0)
    return '';

  const array = Array.from(Array(this.length)).reduce((acc, cur, index) => {
    acc[index] = Object.prototype.hasOwnProperty.call(this, index)
      ? this[index]
      : undefined;
    return acc;
  }, []);

  const isEmpty = value => value === undefined || value === null;
  return array.reduce(
    (acc, cur) =>
      (isEmpty(acc) ? '' : acc) + separator + (isEmpty(cur) ? '' : cur)
  );
};
