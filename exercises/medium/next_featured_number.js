"use strict";

/*

Solved in ~24 minutes

Problem:
  input: an integer
  output:
    the next higher number which is "featured"
      -is odd
      -multiple of 7
      -all digits occur exactly once each
    or an error message if none
      -'There is no possible number that fulfills those requirements.'

Questions:
1. Can the input integer be negative or 0?
  (let's say yes, in which case the next featured number is 7)
2. Can argument be missing? Invalid (not an integer)?
  (assume no, validation not needed)

Data:
  -working with integers as input and output, unless outputting error string
  -highest possible featured number is 9876543201

Algorithm:
1. if input integer is < 7, return 7
2. if >= maxFeaturedNum, return error
3. else, find the first multiple of 7 above input (+= 1 until % 7 === 0)
3. in loop, check if number is featured, then += 7;
  break when currentNum is featured (use helper method)
  in a sub-helper method, need to check if all digits are unique
    -convert to string, split into digit chars
    -iterate through array with index
      if slice(index + 1) includes digit char (i.e. a 2nd time)
        return false
      else return true (no duplicates found by end of iteration)
4. return currentNum

*/

function featured(integer) {
  const MAX_FEATURED = 9876543201;

  if (integer < 7) {
    return 7;
  } else if (integer >= MAX_FEATURED) {
    return 'There is no possible number that fulfills those requirements.';
  }

  let currentNum = getNextMultipleOf7(integer);
  while (!isFeatured(currentNum)) {
    currentNum += 7;
  }

  return currentNum;
}

function isFeatured(integer) {
  return integer % 2 !== 0 && integer % 7 === 0 && hasUniqueDigits(integer);
}

function hasUniqueDigits(integer) {
  let digitChars = integer.toString().split('');
  for (let index = 0; index < digitChars.length; index++) {
    if (digitChars.slice(index + 1).includes(digitChars[index])) {
      return false;
    }
  }

  return true;
}

function getNextMultipleOf7(integer) {
  do {
    integer += 1;
  } while (integer % 7 !== 0);

  return integer;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
