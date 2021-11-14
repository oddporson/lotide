const assert = require('chai').assert;
const _ = require("../index")

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(_.tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
_.tail(words); // no need to capture the return value since we are not checking it
