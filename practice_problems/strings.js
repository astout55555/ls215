"use strict";

let rlSync = require('readline-sync');

let firstName = 'Alex';
let lastName = 'Stout';
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

console.log(firstName.concat(lastName));

console.log(fullName.split(' '));

let language = 'JavaScript';
let idx = language.indexOf('S');
console.log(idx);

let charCode = language.charCodeAt(idx);
console.log(charCode);

console.log(String.fromCharCode(charCode));

console.log(language.lastIndexOf('a'));

let a = 'a';
let b = 'b';
console.log(a > b);
b = 'B';
console.log(a > b);

console.log(language.slice(1, 4));
console.log(language.slice(2, 4));

console.log(language.substring(1, 4));
console.log(language.substring(2, 4));

console.log(language.slice(1, -1));
console.log(language.slice(2, -1));

console.log(language.substring(1, -1));
console.log(language.substring(2, -1));

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';
let compoundSentence = `${fact1} and ${fact2.toLowerCase()}`;
console.log(compoundSentence);

console.log(fact1[0]);
console.log(fact2[0]);

let pi = 22 / 7;
pi = pi.toString();
console.log(pi.lastIndexOf('14'));

let boxNumber = (356).toString();
console.log(boxNumber);

boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);
boxNumber = String(boxNumber);
console.log(typeof boxNumber);

let userName = rlSync.question('What is your name? ');
if (userName[userName.length - 1] === '!') { // ES6 => can use `userName.endsWith('!')`
  userName = userName.slice(0, -1);
  console.log(`HELLO ${userName.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${userName}`);
}

// Reverse a String

function reverse(string) {
  return string.split('').reverse().join('');
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"

// Acronym

function acronym(string) {
  return string.split(/[- ]/)
    .map(word => word[0].toUpperCase())
    .join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"

// Email Validation

function isValidEmail(email) {
  return !!(email.match(/^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i));
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false

// Matching Parentheses

function isBalanced(string) {
  let openParentheses = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === '(') {
      openParentheses += 1;
    } else if (string[index] === ')') {
      openParentheses -= 1;
    }

    if (openParentheses < 0) return false;
  }

  return (openParentheses === 0);
}

// FE, solve with forEach:

// function isBalanced(string) {
//   let openParentheses = 0;
//   let balanced;
//   string.split('').forEach(character => {
//     if (character === '(') {
//       openParentheses += 1;
//     } else if (character === ')') {
//       openParentheses -= 1;
//     }

//     if (openParentheses < 0) {
//       balanced = false;
//     }
//   });

//   if (balanced === false) {
//     return false;
//   } else {
//     return (openParentheses === 0);
//   }
// }

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
