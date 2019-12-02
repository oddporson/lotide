// FUNCTION IMPLEMENTATION

const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${(actual)} !== ${(expected)}`);
//   }
//   return;
// };

const tail = function(array) {
  let exceptFirst = array.slice(1); 
  return exceptFirst;
};


module.exports = tail

