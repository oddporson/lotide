const assert = require('chai').assert;
const _ = require('../index');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it(`should return 'drama' when passed ${bestTVShowsByGenre} and 'The Wire'`, () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it(`should return undefined when passed ${bestTVShowsByGenre} and 'That '70s Show'`, () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});
