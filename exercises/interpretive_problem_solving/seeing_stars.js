"use strict";

/*

solved in ~30 minutes

Problem: display an 8 pointed star made of '*' chars, given an odd integer
  -on an n by n grid (n = input)
    non '*' chars are empty spaces
  -8 points formed by 4 lines of '*'s:
    3 points on top, edges and center
    3 on bottom, edges and center
    2 on left and right edge on center line
  -minimum of n is 7
  -each line is made up of 3 '*'s other than the center line
    center line is n '*'s
    other lines are 3 '*'s,
      with (distance from center - 1) spaces in between them,
      and padded by spaces on the edges until total of n chars in line

Questions:
1. Is there a maximum for n?
  (assume yes, max of 79 so it displays okay in console)
2. Can the input be invalid? What should I do if so?
  (assume input will be valid)

Data: working with strings (rows), put rows into array before printing

Algorithm:
1. find max distance from center (n / 2 rounded down)
2. in loop from max to 1 distance, generate top half of rows, store as var
  margin = 0 + (max distance - distance) spaces
  spaced stars = '*', (distance - 1 spaces), '*', (distance - 1 spaces), '*'
  row = margin + spaced stars + margin
3. store a reversed copy of the output as the bottom half variable
4. iterate through and print each row from top half
5. print center line
6. iterate through and print each row from bottom half

*/

function star(totalRows) {
  let maxDistanceFromCenter = Math.floor(totalRows / 2);

  let topHalfRows = [];
  for (let distance = maxDistanceFromCenter; distance > 0; distance--) {
    let spacing = ' '.repeat(distance - 1);
    let margin = ' '.repeat(maxDistanceFromCenter - distance);
    let row = `${margin}*${spacing}*${spacing}*${margin}`;

    topHalfRows.push(row);
  }

  let centerRow = '*'.repeat(totalRows);
  let bottomHalfRows = topHalfRows.toReversed();

  topHalfRows.forEach(row => console.log(row));
  console.log(centerRow);
  bottomHalfRows.forEach(row => console.log(row));
}

star(7);
// logs:
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs:
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(25);
star(79);