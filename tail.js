// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${(actual)} !== ${(expected)}`);
  }
  return;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const tail = function(array) {
  let exceptFirst = array.slice(1);
  return exceptFirst;
};

// TEST CODE
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words.length, 2); // ensure we get back two elements
assertEqual(words[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(words[1], "Labs"); // ensure second element is "Labs"
