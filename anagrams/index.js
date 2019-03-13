// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
// function anagrams(stringA, stringB) {
//   function getCharMap(string) {
//     let charMap = {};
//     for (let char of string) {
//       charMap[char]++ || (charMap[char] = 1);
//     }
//     return charMap;
//   }
//   const strACharMap = getCharMap(stringA.replace(/[^\w]/g, "").toLowerCase());
//   const strBCharMap = getCharMap(stringB.replace(/[^\w]/g, "").toLowerCase());
//   if (Object.keys(strACharMap).length === Object.keys(strBCharMap).length) {
//     for (key in strACharMap) {
//       if (strACharMap[key] === strBCharMap[key]) {
//         continue;
//       } else {
//         return false;
//       }
//     }
//     return true;
//   } else {
//     return false;
//   }
// }

// Solution 2
function anagrams(stringA, stringB) {
  return (
    stringA
      .replace(/[^\w]/g, "")
      .split("")
      .sort()
      .join() ===
    stringB
      .replace(/[^\w]/g, "")
      .split("")
      .sort()
      .join()
  );
}

module.exports = anagrams;
