const assert = require('chai').assert;
const _ = require("../index");

describe("#findKey", () => {
  let names = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it(`should return 'noma' when passed ${names} object and (x => x.stars === 2) as callback func`, () => {
    assert.strictEqual(_.findKey(names, x => x.stars === 2), "noma");
  });
});
