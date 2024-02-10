"use strict";

/* solved in ~23 minutes

Problem:
  input: string with various number words like 'one', as well as other words
    number words include 'zero' through 'nine'
  outut" string with the number words replaced by their numeric chars (like '1')

Data: working with strings; can use array index to convert word to digit char

Algorithm:
1. create an array of number words, 'zero' through 'nine'
2. split string on spaces between words, and map. for each word,
  set punctuation to ''
  if last char is a non-letter, set it to punctuation, set cleanWord to rest
  find index of cleaned word in numberWords array
    if -1, return original word
    if >= 0, return that index value instead of the word, plus punctuation
3. join and return transformed string

*/

function wordToDigit(string) {
  const NUMBER_WORDS = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
  ];

  return string.split(' ').map(word => {
    let cleanWord = word;
    let punctuation = '';

    if ((/[^a-z]/i).test(word.slice(-1))) {
      cleanWord = word.slice(0, (word.length - 1));
      punctuation = word.slice(-1);
    }

    let numberWordIndex = NUMBER_WORDS.indexOf(cleanWord);

    if (numberWordIndex >= 0) {
      return numberWordIndex + punctuation;
    } else {
      return word;
    }
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('The weight is heavy!'));
// "The weight is heavy!"

// LS Solution using regex for better string processing:

const NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

function wordToDigitRegex(sentence) {
  Object.keys(NUM_WORDS).forEach(word => { // loops through each word from lookup
    // reminder: I can make strings into regex this way! (I'd use 'gi' flags)
    let regex = new RegExp(`\\b${word}\\b`, 'g'); // wraps word in word boundaries
    // needs extra `\`, otherwise JS interprets `\b` as a backspace character
    sentence = sentence.replace(regex, NUM_WORDS[word]); // swaps out each match
  });

  return sentence;
}

console.log(wordToDigitRegex('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigitRegex('The weight is heavy!'));
// "The weight is heavy!"
