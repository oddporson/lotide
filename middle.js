const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    let firstMiddle = arr[Math.floor(arr.length / 2) - 1];
    let secondMiddle = arr[Math.floor(arr.length / 2)];
    return [firstMiddle, secondMiddle];
  } else {
    let middle = arr[Math.floor(arr.length / 2)];
    return [middle];
  }
};

console.log(middle([1,2,3,4,5]));
