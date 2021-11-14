const countLetters = function(string) {
  let splitJointString = string.split(" ").join("");
  const results = {};
  for (char of splitJointString) {
    results[char] ? (results[char] += 1) : (results[char] = 1);
  }
  return results;
};

module.exports = countLetters
