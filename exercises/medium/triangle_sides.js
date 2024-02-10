"use strict";

/*

Solved with refactoring + validation ~42 minutes

Problem:
  input: 3 numbers representing triangle side lengths
    -if a side is 0, or the two shortest sides are <= the longer
      triangle is invalid
    -if all equal,
      triangle is equilateral
    -if only 2 sides are equal,
      triangle is isosceles
    -if no sides are equal to each other,
      triangle is scalene
  output: string giving the type of triangle (or 'invalid')

Data:
  input: given numbers, can be integers or non-integers, 0 or non-zero
  output: string

Questions:
1. Can the input be something other than numbers? Can any args be missing?
  (assume yes, validate input)
2. Can we be given more than 3 args?
  (assume yes, validate input)
3. Can input numbers be negative?
  (assume yes, treat like 0 => 'invalid')

Algorithm:
1. use rest parameter to collect args into an array
2. sort lengths in args array using e1 - e2 sort callback
3. check args array length === 3 and all elements > 0,
  and index 0 + index 1 > index 2 (shortest 2 bigger than longest side),
  else return 'invalid'
4. if index 0 === index 2, return 'equilateral'
5. else if index 0 === 1 or 1 === 2, return 'isosceles'
6. finally, return 'scalene' if nothing else returned earlier

*/

function triangle(...sides) {
  let sortedSides = sides.sort((side1, side2) => side1 - side2);
  let [shortest, middle, longest] = [...sortedSides];

  if (sides.length !== 3 ||
      sides.some(side => side <= 0) ||
      shortest + middle <= longest ||
      !sides.every(side => Number(side) === side)) {
    return 'invalid';
  } else if (shortest === longest) {
    return 'equilateral';
  } else if (shortest === middle || middle === longest) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(1, 3, -1));       // "invalid"
console.log(triangle(3, '3', 3));      // "invalid"
console.log(triangle(3, null, 3));     // "invalid"
console.log(triangle(3, 2));           // "invalid"
console.log(triangle(3, 3, 3, 3));     // "invalid"


// LS Solution:
/* eslint-disable */

function triangleLS(side1, side2, side3) {
  const perimeter = side1 + side2 + side3; // more verbose, assigns each separately
  const longest = Math.max(side1, side2, side3);
  const shortest = Math.min(side1, side2, side3);
  const middle = perimeter - longest - shortest;

  if (isValid(shortest, middle, longest)) {
    return getTriangleType(side1, side2, side3);
  } else {
    return 'invalid';
  }
}

function isValid(shortest, middle, longest) {
  return shortest > 0 && (shortest + middle > longest);
} // good idea to split this into helper function. especially if validating input!

function getTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}
