// FUNCTION IMPLEMENTATION

const assertEqual = require('./assertEqual');

// no longer have to use this below when we can now require this code from the file called assertEqual.js
// const assertEqual = function(actual, expected) {
  // if (actual === expected) {
  //   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  // } else {
  //   console.log(`🛑🛑🛑 Assertion Failed: ${(actual)} !== ${(expected)}`);
  // }
  // return;
// };

const head = function(array) {
  let first = array[0];
  return first;
};


module.exports = head
