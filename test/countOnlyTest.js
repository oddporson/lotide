const _ = require('../index')
const assert = require('chai').assert

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  it("should return { Fang: 2, Jason: 1 } for { 'Jason': true, 'Karima': true, 'Fang': true }", () => {
    assert.deepEqual(_.countOnly(firstNames, { 'Jason': true, 'Karima': true, 'Fang': true }), { Fang: 2, Jason: 1 });
  });
  it("should return { Kavith: 1, Agouhanna: 1 } for { 'Agouhanna': true, 'Kavith': true }", () => {
    assert.deepEqual(_.countOnly(firstNames, { 'Kavith': true, 'Agouhanna': true }), {  Kavith: 1, Agouhanna: 1 });
  });
  it("should return {} for { 'Karima': true }", () => {
    assert.deepEqual(_.countOnly(firstNames, { 'Karima': true }), {});
  });
})
