/*

Problem: write a function with the following input/output:
  input: an odd integer
  output: a diamond
    -made up of the '*' character
    -input integer is equal to its widest point
    -the number of '*' and space characters always add up to input integer
    -the number of '*' chars per line is reduced by 2*(distance from center)
      -down to 1 '*' at the top/bottom; input of `1` logs '*' only

High Level Algorithm:
1. produce one line at a time, from top to one above middle
  store in array, iterate through and print
2. produce the middle line
  store in variable, print
3. reproduce the lines from step 1 in reverse
  reverse and iterate through array from 1, print

Algorithm:
1. declare and init spaces and stars variables
  -stars begins at 1
  -spaces begins at (height - stars) / 2
2. declare lines variable, init to empty array
3. in a loop until line > height/2
  -produce line by adding `spaces` `stars` `spaces`, push to lines array
  -stars += 2
  -spaces = (height - stars) / 2
4. produce center line made up of '*' characters, equal to input height/width
5. iterate through top half of lines, printing
6. print center line
7. iterate through half diamond again after reversing, printing

Helper Algorithms:
  repeat character
    1. give character and number as arguments
    2. in loop, add char to results variable until length === arg given
    3. return the string

*/

function diamond(height) {
  let firstHalfLines = [];
  let centerLineIndex = Math.floor(height / 2);
  let numStars = 1;

  for (let lineIndex = 0; lineIndex < centerLineIndex; lineIndex++) {
    let stars = repeatChar('*', numStars);
    let numSpaces = (height - numStars) / 2;
    let spaces = repeatChar(' ', numSpaces);

    let line = `${spaces}${stars}${spaces}`;
    firstHalfLines.push(line);

    numStars += 2;
  }

  firstHalfLines.forEach(line => console.log(line));
  console.log(`${repeatChar('*', height)}`);
  firstHalfLines.reverse().forEach(line => console.log(line));
}

// can refactor with String.prototype.repeat
function repeatChar(character, finalCount) {
  let results = '';
  while (results.length < finalCount) {
    results += character;
  }

  return results;
}

diamond(1);
diamond(3);
diamond(9);

// LS Solution:

// function diamond(n) {
//   numberSequence(n).forEach(number => { // then, use sequence to log lines
//     console.log(repeat(' ', (n - number) / 2) + repeat('*', number));
//   });
// }

// function numberSequence(n) { // first, produce the correct number sequence
//   const result = [];
//   let increment = 2;

//   for (let number = 1; number > 0; number += increment) {
//     result.push(number);
//     if (number === n) { // flip increment sign after reaching full width
//       increment = -2;
//     }
//   }

//   return result;
// }

// function repeat(char, times) { // same as my repeat function
//   let repeated = '';

//   for (let i = 0; i < times; i += 1) {
//     repeated += char;
//   }

//   return repeated;
// }

// FE: build a hollow diamond instead:

/*

Problem:
  edge spaces are still calculated the same way
    -except num of stars is instead total width of diamond (stars + hollow)
  hollow spaces = number of stars - 2
    -if this is negative, that's because it's the top or bottom line
      -top and bottom lines have no hollow spaces
      -String.prototype.repeat raises error if given negative arg

Algorithm:
1. base solution off LS solution--use the number sequence to calculate
2. map sequence onto lines array
  if number is 1, only add 1 '*'
  otherwise, add '*', empty spaces equal to number - 2, and '*'
3. iterate through lines array and print each

*/

function hollowDiamond(height) {
  let lines = numberSequence(height).map(number => {
    let line = '';
    let edgeSpaces = ' '.repeat((height - number) / 2);
    line += edgeSpaces;

    if (number === 1) {
      line += '*';
    } else {
      line += '*';
      line += ' '.repeat(number - 2);
      line += '*';
    }

    line += edgeSpaces;
    return line;
  });

  lines.forEach(line => console.log(line));
}

function numberSequence(height) {
  const result = [];
  let increment = 2;

  for (let number = 1; number > 0; number += increment) {
    result.push(number);
    if (number === height) {
      increment = -2;
    }
  }

  return result;
}

hollowDiamond(1);
hollowDiamond(3);
hollowDiamond(9);
