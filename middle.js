const eqArrays = require('./eqArrays');


let middle = function(arr) {
  let middleIndex = Math.floor((arr.length-1)/2);
  let arrOutput = [];
  if(arr.length > 2){
    if(arr.length % 2 === 0) {
    arrOutput = arr.slice(middleIndex,middleIndex+2);
    } else {
      arrOutput = arr[middleIndex];
    }
  }
  return arrOutput;
};

module.exports = middle




// revisit to debug this code (Dec 2, 2019)

// const middle = function(arr) {
//   if (arr.length <= 2) {
//     return [];
//   } else if (arr.length % 2 === 0) {
//     let firstMiddle = arr[Math.floor(arr.length / 2) - 1];
//     let secondMiddle = arr[Math.floor(arr.length / 2)];
//     return [firstMiddle, secondMiddle];
//   } else {
//     let middle = arr[Math.floor(arr.length / 2)];
//     return [middle];
//   }
// };
