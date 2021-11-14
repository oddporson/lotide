const middle = function (array) {
  const mid = array.length / 2;
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 === 1) {
    const index = Math.floor(mid);
    return [array[index]];
  } else {
    return [array[mid - 1], array[mid]];
  }
};

module.exports = middle

