// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  let maxChar;
  for (let charKey in charMap) {
    maxChar
      ? charMap[charKey] > charMap[maxChar]
        ? (maxChar = charKey)
        : maxChar
      : (maxChar = charKey);
  }
  return maxChar;
}

module.exports = maxChar;
