function myForEach(array, func) {
  for (let index = 0; index < array.length; index++) {
    func(array[index], index, array);
  } // include the 2nd and 3rd args for func so it can function like forEach,
} // i.e. passes all 3 args in case the callback function wants to make use of them

let min = Infinity;

// refactored getMin to be more readable
let getMin = function(value) {
  if (value <= min) {
    min = value;
  }
};
myForEach([4, 5, 12, 23, 3], getMin);
// equivalent to:
// [4, 5, 12, 23, 3].forEach(getMin);

console.log(min);                        // 3
