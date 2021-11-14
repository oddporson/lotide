const assert = require('chai').assert;
// const middle = require('../middle');
const _ = require("../index")


describe("middle", () => {
  it("returns empty space", () => {
    assert.deepEqual(_.middle([1, 2],[]),([]));
  });
  it("returns [2, 3]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]),([2,3]));
  });
  it("returns 5", () => {
    assert.deepEqual(_.middle([2,3,5,4,6]),5);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6]), [3, 4]);
})
})
