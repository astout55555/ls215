"use strict";

/*

Solved in ~37 minutes

Problem: implement the caesar cipher, taking a string and the shift number (key)
  number is the number of alphabetic chars forward to shift each string char
  output: the shifted string
  don't affect non-letter chars

Questions:
1. Can the string be empty? (assume yes, return an empty string)
2. Will I ever receive too few arguments?
  (assume the shift may be absent, default to returning the original string)

Data: strings, split into chars in array for iteration/mutation (mapping)
  also numbers (unicode/ASCII values), for shifting by a certain number

Algorithm:
1. split string into chars
2. map chars onto new array based on the following (use helper methods):
  convert each char into charCode
  if charCode indicates lowercase letter or uppercase letter, += key
    if new code is out of letter range, cycle back through from A/a
  convert back into char from new code and return
3. join new array and return shifted string

*/

const LOWERCASE_A_CODE = 97;
const LOWERCASE_Z_CODE = 122;
const UPPERCASE_A_CODE = 65;
const UPPERCASE_Z_CODE = 90;

function caesarEncrypt(message, key = 0) {
  return message.split('').map(char => {
    let code = char.charCodeAt(0);
    if (isLowerCase(code)) {
      return String.fromCharCode(shiftLowerCase(code, key));
    } else if (isUpperCase(code)) {
      return String.fromCharCode(shiftUpperCase(code, key));
    } else {
      return char;
    }
  }).join('');
}

function shiftLowerCase(code, key) {
  code += key;
  if (isLowerCase(code)) {
    return code;
  } else {
    let letterCodeRange = LOWERCASE_Z_CODE - LOWERCASE_A_CODE;
    return (code - letterCodeRange - 1);
  } // doesn't work if key is more than 51!
}

function shiftUpperCase(code, key) {
  code += key;
  if (isUpperCase(code)) {
    return code;
  } else {
    let letterCodeRange = UPPERCASE_Z_CODE - UPPERCASE_A_CODE;
    return (code - letterCodeRange - 1);
  }
}


function isLowerCase(code) {
  return (code >= LOWERCASE_A_CODE) && (code <= LOWERCASE_Z_CODE);
}

function isUpperCase(code) {
  return (code >= UPPERCASE_A_CODE) && (code <= UPPERCASE_Z_CODE);
}

// simple shift
console.log(caesarEncrypt(''));           // ''
console.log(caesarEncrypt('A'));          // 'A'
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// LS Solution without ASCII codes:
// I will also have to do this during interview/assessment without resources!

// function caesarEncrypt(plaintext, key) {
//   const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let ciphertext = '';

//   plaintext.split('').forEach(char => {
//     if (char >= 'A' && char <= 'Z') {
//       ciphertext += encrypt(char, key, upperAlphabet);
//     } else if (char >= 'a' && char <= 'z') {
//       ciphertext += encrypt(char, key, lowerAlphabet);
//     } else {
//       ciphertext += char;
//     }
//   });

//   return ciphertext;
// }

// function encrypt(letter, key, alphabet) { // can choose upper/lower here
//   const letterPos = alphabet.indexOf(letter);

//   for (let step = 1; step <= key; step += 1) {
//     if (!alphabet[letterPos + step]) {
//       alphabet += alphabet; // avoids the off-by-1 error, every step counts
//     } // also continues to add alphabet links if key is more than 51!

//     letter = alphabet[letterPos + step];
//   }

//   return letter;
// }


// LS Solution using ASCII values which works for bigger keys:

function caesarEncrypt2(plaintext, key) {
  let ciphertext = '';

  plaintext.split('').forEach(char => {
    if (char >= 'A' && char <= 'Z') { // numeric comparisons not neccessary
      ciphertext += encrypt(char, key, 'upper');
    } else if (char >= 'a' && char <= 'z') {
      ciphertext += encrypt(char, key, 'lower');
    } else {
      ciphertext += char;
    }
  });

  return ciphertext;
}

function encrypt(letter, key, letterCase) {
  const base = letterCase === 'upper' ? 65 : 97; // get base value: 'a' or 'A'
  const charCode = letter.charCodeAt(0) - base; // normalize code
  const shifted = (charCode + key) % 26; // remainder operator wraps around

  return String.fromCharCode(shifted + base);
}

// Testing with larger keys:

console.log(caesarEncrypt2('A', 52));       // "A" vs '['
console.log(caesarEncrypt2('a', 53));       // "b" vs '|'
