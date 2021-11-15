// const eqObjects = function(object1, object2) {
//   let objectListOne = Object.keys(object1);
//   let objectListTwo = Object.keys(object2);
//   if (objectListOne.length !== objectListTwo.length) {
//     return false;
//   } else {
//     for (let key of objectListOne) {
//       if (object1[key] === object2[key]) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     return true;
//   }
// };
const eqObjects = require('./eqObjects');
const inspect = require("util").inspect;

const assertObjectsEqual = (actual, expected) =>
  eqObjects(actual, expected) ? console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);


module.exports = assertObjectsEqual;
