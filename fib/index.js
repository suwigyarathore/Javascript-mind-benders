// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution 1
// function fib(n) {
//   let lastElem;
//   let secondLastElem;
//   let fibSeries = [];
//   for (let i = 0; i <= n; i++) {
//     if (i === 0) {
//       secondLastElem = 0;
//       fibSeries.push(0);
//     } else if (i === 1) {
//       lastElem = 1;
//       fibSeries.push(1);
//     } else {
//       fibSeries.push(lastElem + secondLastElem);
//       secondLastElem = lastElem;
//       lastElem = fibSeries[i];
//     }
//   }
//   return fibSeries[fibSeries.length - 1];
// }

//`Solution 2
function fib(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result[n];
}

module.exports = fib;
