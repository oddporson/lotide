const flatten = function(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let k = 0; k < arr[i].length; k++) {
        flattened.push(arr[i][k]);
      }
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
};

module.exports = flatten;
