function myReduce(array, func, initial) {
  let startIndex;
  let accumulator;

  if (initial === undefined) {
    accumulator = array[0];
    startIndex = 1;
  } else {
    accumulator = initial;
    startIndex = 0;
  }

  array.slice(startIndex).forEach((currentValue, currentIndex, array) => {
    accumulator = func(accumulator, currentValue, currentIndex, array);
  });

  return accumulator;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], smallest, 0));        // 0
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49
console.log(myReduce([5, 12, 15, 1, 6], sum));                // 39

// Demonstration:

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"
