const takeUntil = function(arr, cb) {
  const returnArr = [];

  for (let element of arr) {
    if (!cb(element)) {
      returnArr.push(element);
    } else {
      return returnArr;
    }
  }
  return returnArr;
};

module.exports = takeUntil;
