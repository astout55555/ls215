// my first attempt using manual iteration:
// function myMap(array, func) {
//   let newArray = [];
//   for (let index = 0; index < array.length; index++) {
//     newArray.push(func(array[index], index, array));
//   }

//   return newArray;
// }

// LS solution, using forEach:
// function myMap(array, func) {
//   let result = [];
//   array.forEach(element => result.push(func(element)));
//   return result;
// }

// my refactoring of the LS solution to include index and array args
function myMap(array, func) {
  let result = [];
  array.forEach((element, index, array) => {
    result.push(func(element, index, array));
  });
  return result;
}

let plusOne = num => num + 1;
myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]
