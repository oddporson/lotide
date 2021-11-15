const assert = require("chai").assert;
const _ = require('../index');

describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5, 6] when passed [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});
