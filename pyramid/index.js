// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution 1
// function pyramid(n) {
//   const middle = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let pyramid = "";
//     for (let col = 0; col < n * 2 - 1; col++) {
//       col >= middle - row && col <= middle + row
//         ? (pyramid += "#")
//         : (pyramid += " ");
//     }
//     console.log(pyramid);
//   }
// }

// Solution 2
function pyramid(n, row = 0, level = "") {
  if (n === row) {
    return;
  } else {
    if (level.length === n * 2 - 1) {
      console.log(level);
      return pyramid(n, row + 1);
    }
    const middle = Math.floor((2 * n - 1) / 2);
    level =
      level.length >= middle - row && level.length <= middle + row
        ? (level += "#")
        : (level += " ");
    return pyramid(n, row, level);
  }
}

module.exports = pyramid;
