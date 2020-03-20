// TEST/ASSERTION FUNCTIONS

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

const assertArraysEqual = function(actual, expected) {
  JSON.stringify(actual) === JSON.stringify(expected) ?
  console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`) : 
  console.log(`❌❌❌ Assertion Failed: "${actual}" !== "${expected}"`);
};

// ACTUAL FUNCTION

const middle = function(array) {

}



// TEST CODE

// For arrays with one or two elements, there is no middle. Return an empty array.
middle([1]) // => []
middle([1, 2]) // => []

// For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned.
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
