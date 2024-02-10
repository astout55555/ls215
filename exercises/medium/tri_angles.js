"use strict";

/*

solved in ~16 minutes

Problem:
  input: 3 numbers representing triangle angles
    -each angle is an integer, representing the angle in degrees
  output: string, type of triangle or 'invalid'
    'invalid' if:
      -angles do not add up to 180
      -any angle is <= 0
    if not invalid...
    'right' if an angle is 90 degrees
    'obtuse' if an angle is > 90
    'acute' if no angle is > 90

Data:
  working with numbers for input angles and comparisons, strings for output.
  for easier processing, can collect args into array with rest syntax.

Questions:
1. Can the input be bad input (negative)? Too many or too few args provided?
  (assuming yes to make it harder--validate input)

Basic Algorithm:
0. use rest syntax with parameter to collect angles into array
1. perform series of if/else conditional checks on angles array
  rule out that it is invalid first, then
  return 'obtuse' if some angle is > 90,
  return 'right' if some angle === 90,
  else return 'acute'

*/

function triangle(...angles) {
  if (angles.reduce((sum, angle) => sum + angle) !== 180 ||
      angles.some(angle => angle <= 0) ||
      angles.length !== 3) {
    return 'invalid';
  } else if (angles.some(angle => angle > 90)) {
    return 'obtuse';
  } else if (angles.some(angle => angle === 90)) {
    return 'right';
  } else {
    return 'acute';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
console.log(triangle(60, 30, -90));      // "invalid"
console.log(triangle(60, 70, 40, 10));   // "invalid"
console.log(triangle(120, 60));          // "invalid"
