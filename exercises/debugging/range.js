// // original

// function range(start, end) {
//   const range = [];

//   for (let element = start; element <= end; element++) {
//     range.push(element);
//   }

//   return range;
// }

// function range(end) { // new definition for `range` overwrites previous one
//   return range(0, end); // starts infinite recursive loop (ignores 2nd arg)
// }

// // Examples

// console.log(range(10, 20));
// console.log(range(5));


// debugged

function range(start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));


// // FE: non-working solution

// function range(start, end) {
//   if (!end) { // there are other falsey values that end could have, like 0
//     start = 0;
//     end = start; // assigns end to 0. should be before reassigning start
//   }

//   // ...
// }
