const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== " ") {
      !Array.isArray(results[char])
        ? (results[char] = [i])
        : results[char].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;
