"use strict";

/*

Solved in ~17 minutes

Problem: find difference between square of sum and sum of squares of 1..n
  square of sum:
    n = 3; (1 + 2 + 3)**2
  sum of squares:
    n = 3; (1**2 + 2**2 + 3**2)
  input: positive integer, 1 or higher
  output: square of sums - sum of squares (integer)

Questions:
1. Can the input be invalid (0? negative? non-integer? another date type?)
  (assume no, validation not required)
2. Can argument be missing? (assume no)

Data: working with number inputs and outputs
  could work with arrays of 1 up to n, transforming and reducing before sub

Algorithm:
1. build array of 1..n in for loop, from 1..n, pushing value into array
2. find square of sum by reducing to sum, then squaring
3. find sum of squares by mapping to squares, then reducing to sum
4. return square of sums - sum of squares

*/

function sumSquareDifference(max) {
  let integers = [];

  for (let integer = 1; integer <= max; integer++) {
    integers.push(integer);
  }

  let squareOfSums = integers.reduce((sum, integer) => sum + integer) ** 2;
  let sumOfSquares = integers.map(integer => integer ** 2)
    .reduce((sum, square) => sum + square);

  return squareOfSums - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
