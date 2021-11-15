const _ = require('../index');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(_.assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(_.assertObjectsEqual(ab, abc)); // => false

_.assertObjectsEqual(_.eqObjects(ab, ba), true);
_.assertObjectsEqual(_.eqObjects(ab, abc), false);
