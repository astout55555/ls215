/*

Problem: take an array of rectangles, return the total area of all rectangles
-rectangles are represented as subarrays with 2 elements, height and width
-area is height * width

Data: an array with subarrays each with 2 positive integers as elements

Abstractions/Algorithm:
1. transform array of rectangles into array of areas
2. reduce array to a single total area

*/

function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
  let totalArea = areas.reduce((total, area) => total + area);
  return totalArea;
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

// calculate the total area of only the squares from a set of rectangles:
// 1. filter out the non-squares
// 2. call totalArea and pass it the array of squares

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squares);
}

console.log(totalSquareArea(rectangles));    // 121
