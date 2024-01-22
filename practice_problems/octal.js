"use strict";

/*

Problem: octal to decimal conversion
-no built-in conversions allowed

Data: passed a string octal, returns decimal number

Abstraction/Algorithm:
1. transform string into an array of digits from lowest to highest place
  -split number into an array of digit characters and reverse
  -map to numeric digits
2. reduce values to the sum of linear combination of powers of 8
  -each numerical digit is multiplied by 8 to the power of index
  -return the (decimal)

*/

// my solution:
function octalToDecimal(numberString) {
  let digits = numberString.split('').reverse().map(char => Number(char));
  return digits.reduce((decimalNumber, currentDigit, index) => {
    decimalNumber += currentDigit * (8 ** index);
    return decimalNumber;
  }, 0);
} // LS alternate solution shows we could reduce right after splitting into octal digit chars

// LS solution 1:

// function octalToDecimal(numberString) {
//   let decimalParts = numberString.split('').map((digitChar, index) => {
//     return Number(digitChar) * Math.pow(8, numberString.length - index - 1);
//   }); // first transforms into decimal values for each octal digit

//   return decimalParts.reduce((sum, number) => sum + number); // then sums
// }

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
