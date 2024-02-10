"use strict";

/*

Solved in ~23 minutes; ~30 minutes with refactoring

Problem: write a function that bubble-sorts an array
  input: an array of comparable elements (all strings or all numbers)
    -array will have at least 2 elements
  output: the same array, sorted in place from min-max, A-Z
  -must follow the bubble-sort algorithm
  1. in a series of iterations over the elements of the array
    2. compare the first two elements
      -swap positions if needed so smaller element is first
    3. compare the second/third elements, swap if needed, and so on
    4. restart the iteration from beginning if any swaps occured
  5. once an iteration is done with no swaps, return the array

Questions:
1. Will the input array ever have uncomparable elements?
  (assume no)
2. Will the input array ever have elements of different types from each other?
  (assume no)
3. Will the input array ever have elements other than numbers or strings?
  (assume no)
4. Should the function be designed to handle invalid or missing/extra args?
  (assume no)
5. Will the strings ever have mixed casing (comparing e.g. 'apple' and 'Adam')?
  (assume no)
6. Will the array ever have identical elements (indeterminate order)?
  (assume no)

Data:
  -strings or numbers as array elements
  -input is an array
  -output is the same array, sorted (mutated)

Algorithm:
0. declare swapped
1. use do...while loop, with condition checking that swapped = true
  2. start of loop, swapped assigned false
  3. within this loop, use for loop to iterate over elements, comparing 2
    if array[index] > array[index + 1]
      swapped = true
      [1, 2] = [2, 1] (swap values in place)
    stop at length - 2 (so we don't try to compare with last index + 1)
4. return mutated array

*/

function bubbleSort(array) {
  let swapMade;

  do {
    swapMade = false;

    for (let index = 0; index < array.length - 1; index++) {
      let [first, second] = [array[index], array[index + 1]];

      if (first > second) {
        swapMade = true;
        [array[index], array[index + 1]] = [second, first];
      }
    }
  } while (swapMade === true);

  return array;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
