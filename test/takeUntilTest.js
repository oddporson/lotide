const assert = require("chai").assert;
const _ = require('../index');

describe("#takeUntil", () => {
  it("should return [ 1, 2, 5, 7, 2 ] when passed [1, 2, 5, 7, 2, -1, 2, 4, 5] and (x => x < 0) as callback", () => {
    assert.deepEqual(_.takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });
  it("should return [ 'I've', 'been', 'to', 'Hollywood' ] when passed ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'] and (x => x === ',') as callback", () => {
    assert.deepEqual(_.takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
});
