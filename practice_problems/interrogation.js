// writing my own version of the `every` function

// function myOwnEvery(array, func) {
//   let conditionMet = true;

//   array.forEach((element, index, array) => {
//     if (!func(element, index, array)) {
//       conditionMet = false;
//     }
//   });

//   return conditionMet;
// }

// JS Solution uses a for loop to allow for early returns (I refactored):

function myOwnEvery(array, func) {
  for (let idx = 0; idx < array.length; idx += 1) {
    if (!func(array[idx], idx, array)) {
      return false;
    }
  }

  return true;
}

// writing my own version of the `some` function merely requires
// swapping the check and the booleans, like so:
function myOwnSome(array, func) {
  for (let idx = 0; idx < array.length; idx += 1) {
    if (func(array[idx], idx, array)) { // check if condition met, instead of not met
      return true; // return true instead of false
    }
  }

  return false; // return false instead of true
}

let isAString = value => typeof value === 'string';

myOwnEvery(['a', 'a234', '1abc'], isAString); // true
myOwnEvery([2, 'a234', '1abc'], isAString);   // false

myOwnSome([2, 234, 1], isAString);            // false
myOwnSome(['a', 'a234', 1], isAString);       // true

// Example using this function:

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

areAllNumbers([1, 5, 6, 7, '1']);             // false
areAllNumbers([1, 5, 6, 7, 1]);               // true
areAllNumbers([1, 5, 6, 7, NaN]);             // false
