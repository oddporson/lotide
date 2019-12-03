// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${(actual)} !== ${(expected)}`);
//   }
//   // return;
// };

const countLetters = function(itemsToCount) {
  let stringArr = itemsToCount.split(' ').join('');
  const letterResult = {};
  for (const letter of stringArr) {
    if (letterResult[letter]) {
      letterResult[letter] += 1;
    } else letterResult[letter] = 1;
  }
  // console.log(letterResult);
  return letterResult;
};

module.exports = countLetters

