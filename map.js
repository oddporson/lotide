const map = function(arr, cb) {
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
};

module.exports = map;
