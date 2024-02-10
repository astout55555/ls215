"use strict";

// solved in < 33 minutes

/*

Problem:
  input: string arg
  output: new string
    -the alphabetic characcters have taken the place of the numeric characters
    -and vice versa

Questions:
1. It seems like if there aren't enough numeric characters to swap in for every
  alphabetic character, then the excess alphabetic characters are left alone.
  What happens if there aren't enough alphabetic characters to swap in for every
  numeric character? The same thing, i.e. the excess characters are left alone?
2. It seems that the swaps happen left to right, i.e. the first alphabetic char
  swaps places with the first numeric character.
3. Can the string be empty? - yes, return an empty string in that case
  rules out: Will there always be at least 1 alphabetic and 1 numeric character?
4. Could the string have other types of characters? - yes, leave them in place

Data: input and output are strings
  -will need to iterate over strings to identify types of characters and indices
  -will need to be able to transform values by swapping location of characters
  -should break string into array to make mutation easier, then rejoin to output

Algorithm:
1. split string into characters
2. filter out the alphabetic chars and store in var
3. filter out the numeric chars and store in var
4. init empty results string
5. iterate through input string's chars. for each:
  if alphabetic, push the first numeric char from var into results (shift())
    if no numeric chars left, push char as-is into result
  if numeric, push first alphabetic char from var into results (shift())
    if no alphabetic chars left, push char as-is into result
  else push character into results
6. return results string

*/

function swap(str) {
  let allChars = str.split('');

  let alphabeticChars = allChars.filter(char => /[a-z]/i.test(char));
  let numericChars = allChars.filter(char => /[\d]/.test(char));

  return allChars.map(character => {
    if (/[a-z]/i.test(character) && numericChars.length > 0) {
      return numericChars.shift();
    } else if (/[\d]/.test(character) && alphabeticChars.length > 0) {
      return alphabeticChars.shift();
    } else {
      return character;
    }
  }).join('');
}

// Examples / Test Cases:

console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("") === ""); // true
console.log(swap("12a") === "a21"); // true
console.log(swap("ab1") === "1ba"); // true
console.log(swap("abcd") === "abcd"); // true
console.log(swap("1") === "1"); // true
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
console.log(swap("ab1CD23") === "12a3DbC"); // true

// LS Solution:

const isLetter = char => /[a-z]/i.test(char); // makes reusing this easier
const isDigit = char => /\d/i.test(char);

function swap2(str) {
  if (str.length === 0) return str;

  const chars = str.split("");
  const letters = chars.filter(isLetter);
  const nums = chars.filter(isDigit);

  if (letters.length === 0 || nums.length === 0) return str; // skips iteration

  const swapped = chars.map(char => {
    if (isLetter(char) && nums.length > 0) return nums.shift(); // weird syntax
    else if (isDigit(char) && letters.length > 0) return letters.shift();

    return char;
  });

  return swapped.join("");
}

console.log(swap2("1a2b3c") === "a1b2c3"); // true
