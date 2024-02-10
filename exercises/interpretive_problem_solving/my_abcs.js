"use strict";

// solved in < 40 minutes

/*

Problem: determine whether a string could be spelled using a set of "blocks"
  input: a "word string" (could have upper or lowercase letters)
  output: true or false
  -true if can be spelled using the blocks
    -each block has two letters. cannot use both letters from the same block.
    -a word does not have to use all the blocks.

"Blocks":
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
-no repeat letters, each block and each letter is unique
-contain all the letters of the alphabet

Data: given a string
  -a word, i.e. no spaces or non-alphabetic characters, not empty (confirm?)
  -solution is case-insensitive (consider them all uppercase)
  -output is a boolean
  -how to represent the blocks:
    if an object of key/value pairs,
      can easily find value letter on other side of key letter,
      must be able to match value to key in reverse as well...
      brute force method: list out full alphabet, match to each letter

Algorithm:
0. represent the blocks as an object of 26 letter pairs
1. for each letter in the input word:
  1a. find the letter's counterpart on the other side of the block
    object key value lookup
  1b. confirm that no remaining letter in the word matches the counterpart
    OR matches the current letter,
      -restofword = slice(index + 1)
    -check if restofwords.includes(letter counterpart) ||
      restofword.includes(letter)
  1c. return false if match found, otherwise continue iteration
2. return true unless early return of false occurred

*/

const BLOCKS = { // misleadingly suggests there are 26 blocks, 13 pairs
  A: 'N', B: 'O', C: 'P', D: 'Q', E: 'R',
  F: 'S', G: 'T', H: 'U', I: 'V', J: 'W',
  K: 'X', L: 'Y', M: 'Z', N: 'A', O: 'B',
  P: 'C', Q: 'D', R: 'E', S: 'F', T: 'G',
  U: 'H', V: 'I', W: 'J', X: 'K', Y: 'L',
  Z: 'M',
}; // works with my function, but this is not the clearest option

function isBlockWord(wordString) {
  let uppercasedWord = wordString.toUpperCase();

  for (let index = 0; index < wordString.length; index++) {
    let letter = uppercasedWord[index];
    let restOfWord = uppercasedWord.slice(index + 1);
    if (restOfWord.includes(BLOCKS[letter]) || restOfWord.includes(letter)) {
      return false;
    }
  }

  return true;
}

// LS Solution:
/* eslint-disable */
function isBlockWord2(word) { // clever to simply put the letters together into strings!
  const blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  const letters = word.split('');

  for (let i = 0; i < letters.length; i += 1) {
    let matchingBlock = blocks.filter(block => block.includes(letters[i].toUpperCase()))[0];

    if (matchingBlock === undefined) { // from the attempted reference with `[0]` above
      return false; // no block available for this letter, return false
    } else {
      blocks.splice(blocks.indexOf(matchingBlock), 1); // delete the block from the array
    }
  }

  return true;
}

// LS Solution 2: condensed with regex but less readable
function isBlockWord3(word) {
  const blocks = ['B:O', 'X:K', 'D:Q', 'C:P', 'N:A', 'G:T', 'R:E', 'F:S', 'J:W', 'H:U', 'V:I', 'L:Y', 'Z:M'];
  const regExps = blocks.map(block => new RegExp(block.replace(':', '|'), 'gi')); // e.g. `/B|O/gi`
  // match returns null if no match found. alt value of `[]` ensures no error with `.length`
  return regExps.every(regExp => (word.match(regExp) || []).length < 2);
} // i.e. every regexp matches no more than once with the input word

// Examples / Test Cases:

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false [uses the U and H, which are on the same block]
console.log(isBlockWord('jest'));       // true [case insensitive, lowercase okay]
console.log(isBlockWord('butch'));      // false [can detect false with lowercase too]
console.log(isBlockWord('BABY'));       // false [cannot use same block twice]

// other tests from the exercise page:
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
