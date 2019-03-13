// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution 1
// function capitalize(str) {
//   return str
//     .split(" ")
//     .map(word => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }

// Solution 2
function capitalize(str) {
  let capitalizeString = str[0].toUpperCase() + str.slice(1);
  return capitalizeString
    .split("")
    .map((char, i) =>
      capitalizeString[i - 1] === " " ? char.toUpperCase() : char
    )
    .join("");
}

module.exports = capitalize;
