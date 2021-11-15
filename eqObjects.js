const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  const keysInArray = Object.keys(object1);
  for (let key of keysInArray) {
    if (
      Array.isArray(object1[key]) === true &&
      Array.isArray(object2[key]) === true
    ) {
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
