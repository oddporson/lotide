const assertArraysEqual = function(actual, expected) {
  JSON.stringify(actual) === JSON.stringify(expected) ?
  console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`) : 
  console.log(`❌❌❌ Assertion Failed: "${actual}" !== "${expected}"`);
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      // console.log('show me loop of arr1 -->', arr1[i]);
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true; 
  }
}

