const _ = require('../index')

//Test Codes
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

const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

_.assertEqual(result1["Jason"], 1);
_.assertEqual(result1["Karima"], undefined);
_.assertEqual(result1["Fang"], 2);
