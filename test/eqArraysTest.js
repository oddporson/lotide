const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp",); // ==> false
assertEqual(1, 1); // ==> true

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
