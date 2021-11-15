const assert = require('chai').assert;
const _ = require('../index');

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const cd = { c: "1", d: ["2", 3] };

  it("should return true when passed eqObjects(ab, ba)", () => {
    const ba = { b: "2", a: "1" };

    assert.strictEqual(_.eqObjects(ab, ba), true);
  });
  it("should return false when passed eqObjects(ab, abc)", () => {
    const abc = { a: "1", b: "2", c: "3" };

    assert.strictEqual(_.eqObjects(ab, abc), false);
  });
  it("should return true when passed eqObjects(cd, dc)", () => {
    const dc = { d: ["2", 3], c: "1" };

    assert.strictEqual(_.eqObjects(cd, dc), true);
  });
  it("should return false when passed eqObjects(cd, cd2)", () => {
    const cd2 = { c: "1", d: ["2", 3, 4] };
    
    assert.strictEqual(_.eqObjects(cd, cd2), false);
  });
});
