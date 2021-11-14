const without = function (source, itemsToRemove) {
  let arr = [];
  source.forEach((element) => {
    if (!itemsToRemove.includes(element)) {
      arr.push(element);
    }
  });
  return arr;
};

module.exports = without
