// Part 1

// function staggeredCase(string) {
//   return string.split('').map((character, index) => {
//     if (index % 2 === 0) {
//       return character.toUpperCase();
//     } else {
//       return character.toLowerCase();
//     }
//   }).join('');
// }

// Part 2: modify to ignore non-alphabetic characters when alternating case

// My solution:
// function staggeredCase(string) {
//   let results = '';
//   let lastAlphabetic = 'a';

//   string.split('').forEach(character => {
//     if (/[a-zA-Z]/.test(character)) {
//       if (/[a-z]/.test(lastAlphabetic)) {
//         character = character.toUpperCase();
//       } else {
//         character = character.toLowerCase();
//       }

//       lastAlphabetic = character;
//     }

//     results += character;
//   });

//   return results;
// }

// LS Solution:
function staggeredCase(string) {
  let needUpper = true; // boolean to toggle is more clear
  let newChar; // new variable can be distinguished from `char`

  return string.split('').map(char => { // map builds the results for you
    if (char.match(/[a-z]/i)) {
      if (needUpper) {
        newChar = char.toUpperCase(); // set value of newChar
      } else {
        newChar = char.toLowerCase();
      }

      needUpper = !needUpper; // toggle the boolean
      return newChar;
    } else {
      return char; // return old char if not returning newChar above
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
