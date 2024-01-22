function myFilter(array, func) {
  let filteredArray = [];
  array.forEach( (element, index, array) => {
    if (func(element, index, array)) { // 3 args provided by forEach
      filteredArray.push(element);
    }
  });

  return filteredArray;
}

let isPythagoreanTriple = function (triple) {
  let sumOfShortSidesSqrd = Math.pow(triple.a, 2) + Math.pow(triple.b, 2);
  return sumOfShortSidesSqrd === Math.pow(triple.c, 2);
};

console.log(myFilter([{ a: 3, b: 4,  c: 5 },
  { a: 5, b: 12, c: 13 },
  { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

// building on myFilter, modifying LS code to use the index and array values:

function isMultipleOfThreeOrFive(value, index, array) {
  console.log(`Index: ${index}`); // accurately prints info, passed from forEach
  console.log(`Array: ${array}`);
  return value % 5 === 0 || value % 3 === 0;
}

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));  // [ 3, 5, 18, 15 ]
