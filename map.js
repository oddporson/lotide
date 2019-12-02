const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${(actual)} !== ${(expected)}`);
  }
  return;
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
  results.push(callback(item));
}
return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(["doggo", "out", "of", "magic", "hat"], word => word[0]), ["d", "o", "o", "m", "h"]);
assertArraysEqual(map([2,3,4], num => ++num), [3,4,5]);
assertArraysEqual(map([8,3,5], num => ++num), [3,4,5]);
