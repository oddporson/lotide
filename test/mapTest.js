const assert = require('chai').assert;
const _ = require("../index");

describe("#map", () => {
  it("should return [ 'g', 'c', 't', 'm', 't' ] when passed ['ground', 'control', 'to', 'major', 'tom'] and word => word[0] as callback", () => {
    assert.deepEqual(_.map(["ground", "control", "to", "major", "tom"], word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });
  it("should return ['d', 'o', 'o', 'm', 'h']", () => {
    assert.deepEqual(_.map(["doggo", "out", "of", "magic", "hat"],word => word[0]),(["d", "o", "o", "m", "h"]));
  });
  it("should return [3,4,5]", () => {
    assert.deepEqual(_.map([2,3,4], num => ++num),([3,4,5]));
  });
  it("should return [] when passed an empty array and word => word[0] as callback", () => {
    assert.deepEqual(_.map([], word => word[0]), []);
  });
});
