function letterCaseCount(string) {
  let results = {};

  let chars = string.split('');
  results.lowercase = chars.filter(char => /[a-z]/.test(char)).length;
  results.uppercase = chars.filter(char => /[A-Z]/.test(char)).length;
  results.neither = chars.length - results.lowercase - results.uppercase;

  return results;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
