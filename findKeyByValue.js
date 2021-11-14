const findKeyByValue = (object, value) =>
  Object.keys(object).find((key) => object[key] === value);

module.exports = findKeyByValue;
