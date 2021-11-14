const assertArraysEqual = require('./assertArraysEqual')

const without = function (source, itemsToRemove) {
  let arr = [];
  source.forEach((element) => {
    if (!itemsToRemove.includes(element)) {
      arr.push(element);
    }
  });
  return arr;
};

// TEST CODES

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log("before without function occured", words);
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log("after without function occured", words); // original array should not have been altered
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
