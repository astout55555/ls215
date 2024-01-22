// Leading Substrings

function leadingSubstrings(string) {
  return string.split('').map((_, index) => {
    return string.substring(0, index + 1);
  });
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// All Substrings

function substrings(string) {
  return string.split('').map((_, index) => {
    return leadingSubstrings(string.slice(index));
  }).flat();
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

// Palindromic Substrings

function palindromes(string) {
  let allSubstrings = substrings(string);

  return allSubstrings.filter(substring => {
    return ((substring.length > 1) &&
      (substring === substring.split('').reverse().join('')));
  });
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
