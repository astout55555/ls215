"use strict";

/* First solution found in ~20 mins; another solution found in ~18 mins

Problem:
  input: string of at least 1 character
    upper and/or lowercase letters
    other chars also allowed
  output: an object with three key/value pairs
    keys: lowercase, uppercase, neither
    values: string representations of percentage of the type of char in string
      rounded to 2 places after the decimal, '0.00' through '100.00'

Data:
  working with string input
  percentages must be found using numbers and division
  output is an object made of key and value strings
    (can use toFixed() to convert number to string with .00 precision)

Algorithm:
1. split string into chars
2. find total length
3. filter the array of chars into 3 vars, upper, lower, and neither, get lengths
4. return object {key: percentValue.toFixed(2), etc.}
  percentValue is var / total * 100

*/

// // solution using list processing with regex to filter chars
function letterPercentagesLP(string) {
  let allChars = string.split('');
  let totalChars = string.length;

  let lowercase = allChars.filter(char => /[a-z]/.test(char)).length;
  let uppercase = allChars.filter(char => /[A-Z]/.test(char)).length;
  let neither = allChars.filter(char => /[^A-Z]/i.test(char)).length;

  return {
    lowercase: (lowercase / totalChars * 100).toFixed(2),
    uppercase: (uppercase / totalChars * 100).toFixed(2),
    neither: (neither / totalChars * 100).toFixed(2),
  };
}

// solution using string processing only, no arrays
function letterPercentagesSP(string) {
  let totalChars = string.length;

  let lowercase = string.replace(/[^a-z]/g, '').length;
  let uppercase = string.replace(/[^A-Z]/g, '').length;
  let neither = string.replace(/[a-z]/gi, '').length;

  return {
    lowercase: (lowercase / totalChars * 100).toFixed(2),
    uppercase: (uppercase / totalChars * 100).toFixed(2),
    neither: (neither / totalChars * 100).toFixed(2),
  };
}

/* eslint-disable */
// LS Solution:
function letterPercentages(string) {
  const count = string.length;
  return { // more concise, but may be overly dense. lines also too long for eslint
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2),
  }; // using string.match() || [] avoids possible `null.length`
} // counts regex matches rather than replacing all non-matching chars each time

console.log(letterPercentagesLP('abCdef 123'));
console.log(letterPercentagesSP('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentagesLP('AbCd +Ef'));
console.log(letterPercentagesSP('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentagesLP('123'));
console.log(letterPercentagesSP('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
