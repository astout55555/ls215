"use strict";

/*

Solved in ~55 minutes

Problem:
  input: a plaintext message (string), a keyword
    the keyword is interpreted as a series of keys for caesar ciphers
      each letter of the keyword is like a caesar cipher key
      each key is then applied to the next message char in turn, and so on
      the key is not applied to non-letter characters (apply to next valid char)
      'a' is 0, up through 'z' which is 25 (case insensitive)
  output: encrypted message (string)
    do not change non-letter chars

Questions:
1. Can I reuse the solution to the caesar cipher problem?
  (assume yes--this is harder than a normal assessment question)
2. What should I do if the keyword contains non-letter chars, or is empty?
  (assume this will not occur, valid args only)
3. What should I do if the keyword is longer than the message?
  (assume I apply the keys letter by letter as normal, and end before finishing)

Data: strings for inputs/output, index numbers of string chars, arrays of chars

High Level Algorithm:
0. rather than using casearEncrypt(), use encrypt() for single-char shifts
1. initialize keyword index at 0
2. declare constants for alphabet strings (upper and lowercase)
3. change keyword to lowercase only
4. split input message into chars, map to transform, rejoin and return

More on step 4:
1. key letter is set to index of keyword % keyword length (cycle through)
2. key is set to index of key letter in string alphabet representation
3. when using map, whenever a letter is encrypted, increment keyword index

*/

const UPPER_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function vigenereEncrypt(plaintext, keyword) {
  let keywordIndex = 0;
  keyword = keyword.toLowerCase();

  return plaintext.split('').map(char => {
    let key = LOWER_ALPHABET.indexOf(keyword[keywordIndex]);
    let encryptedChar;

    if (char >= 'A' && char <= 'Z') {
      encryptedChar = encrypt(char, key, UPPER_ALPHABET);
    } else if (char >= 'a' && char <= 'z') {
      encryptedChar = encrypt(char, key, LOWER_ALPHABET);
    } else {
      return char;
    }

    keywordIndex += 1;
    keywordIndex %= keyword.length;

    return encryptedChar;
  }).join('');
}

function encrypt(letter, key, alphabet) {
  const letterPos = alphabet.indexOf(letter);

  for (let step = 1; step <= key; step += 1) {
    if (!alphabet[letterPos + step]) {
      alphabet += alphabet;
    }

    letter = alphabet[letterPos + step];
  }

  return letter;
}

// LS original provided test case:
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat'));
// Bmnxmtpeqw dhz'x gh ar pbldal!

// My own examples/tests:
console.log(vigenereEncrypt('Oh, hello!', 'B'));
// 'Pi, ifmmp!'

console.log(vigenereEncrypt('Hello world.', 'a'));
// 'Hello world.'

console.log(vigenereEncrypt('Hi', 'hello'));
// 'Om'

// Additional LS provided test cases:
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'cab'));
// Riogaqrlfu dpp't hq oo riabat!

console.log(vigenereEncrypt('Dog', 'Rabbit'));
// Uoh
