const assert = require('chai').assert;
const middle = require('../middle');


describe("middle", () => {
  it("returns empty space", () => {
    assert.deepEqual(middle([1, 2],[]),([]));
  }); 
  it("returns [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]),([2,3]));
  });
  it("returns 5", () => {
    assert.deepEqual(middle([2,3,5,4,6]),5);
  });
});

// assertArraysEqual(middle([1, 2]),[]);// => [2]
// assertArraysEqual(middle([1, 2, 3, 4]),[2,3]);
// assertArraysEqual(middle([2,3,5,4,6]),5);
