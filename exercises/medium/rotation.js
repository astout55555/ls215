"use strict";

// Part 1 - solved in ~ 10 minutes

/*

Problem:
  input: array (if not array, return undefined)
    elements can be anything (strings, numbers, arrays, objects)
    non-array input could be some other data or no argument
    if array is empty, return empty array
    if array has 1 element, return array with same element
  output: new array with same elements except 1st element moved to end
    do not mutate the original array

Data: arrays for input/output, or non-array input with undefined output

Algorithm:
0. check if input is array, if not, return undefined
  then, check if array has more than 1 element, if not, return a copy
1. copy input array with slice to avoid mutation
2. store first element with shift
3. append element to array copy and return

*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length < 2) {
    return arr.slice();
  }

  let newArray = arr.slice();
  let shiftedElement = newArray.shift();
  newArray.push(shiftedElement);

  return newArray;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]


// Concise LS Solution
// function rotateArray(array) {
//   if (!Array.isArray(array)) {
//     return;
//   }

//   if (array.length === 0) {
//     return [];
//   }

//   return array.slice(1).concat(array[0]); // concat works with arrays/values
// } // if no index 1 element, slice returns empty array


// Part 2 - solved in another ~25 minutes

/*

Problem: rotate the last n digits of a number
  -rotate that chunk of the digits once, by moving the first digit to the end
  input: number, and number of digits to rotate
  output: rotated number (the untouched digits plus rotated digits)

Data: numbers, should change to strings to slice and rotate

Algorithm:
1. convert number to string
2. find split point (length - n === first digit of rotated portion)
3. slice(0, split point) === first portion; slice(split point) is rotated
4. reassign rotated var to rotated.slice(1) + rotated[0]
5. concat the two strings, first part and rotated part
6. convert to number, and return

*/

function rotateRightmostDigits(number, endDigitsToRotate) {
  let numString = number.toString();
  let splitIndex = numString.length - endDigitsToRotate;
  let unrotated = numString.slice(0, splitIndex);
  let rotated = numString.slice(splitIndex);
  rotated = rotated.slice(1) + rotated[0];

  return Number(unrotated + rotated);
}

console.log('Part 2');

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917


// Part 3 - solved in another ~25 minutes

/*

Problem: find and return the 'maximum rotation' of a number
  input: number
  output: the maximum rotation (number)
    -any leading zeros are dropped
    -rotate in sequence the full number, then slice(1), then slice(n) etc.
      i.e. from first index digit to last index digit,
        rotate all digits from index to the end by moving first digit to end

Data: numbers (input, output), strings (for accessing indexes, slices, concats)

Algorithm: using rotateRightmostDigits function
1. iterate through each digit (split a string version). for each:
  use numString.length - current index as the split point index
    i.e. (first digit of rotation group)
  reassign number return of invoking rotateRightmostDigits(number, endDigits)
    this returns a number each time, ready to return after iteration

*/

function maxRotation(number) {
  let numString = number.toString();
  numString.split('').forEach((_, index) => {
    let endDigitsToRotate = numString.length - index;
    number = rotateRightmostDigits(number, endDigitsToRotate);
  });

  return number;
}

console.log('Part 3');

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

// LS Solution:

// function maxRotation(number) {
//   for (let i = String(number).length; i > 1; i -= 1) { // iterates backwards
//     number = rotateRightmostDigits(number, i); // rotate full number to start
//   } // it's okay to use for loop even when not exiting loop early

//   return number;
// }
