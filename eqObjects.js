const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  // return;
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

// // function
const eqObjects = function(object1, object2) {
  let objectListOne = Object.keys(object1);
  let objectListTwo =- Object.keys(object2);
    if (objectListOne.length !== objectListTwo.length) {
      return false;
    } else {
      for (let key of objectListOne) {
        if (object[key] === object[key]) {
          return true;
        } else {
          return false;
        }
      }
    return true;
    }
};

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(eqObjects(ab, ba), true);
