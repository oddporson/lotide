const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');

assertArraysEqual(middle([1, 2]),[]);// => [2]
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]);
assertArraysEqual(middle([2,3,5,4,6]),5);
