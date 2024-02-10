"use strict";

/* solved in ~35 minutes

Problem: write function that...
  -returns the index of the first Fibonnaci number with n digits
  input: BigInt (an integer with `n` after), i.e. the number of digits required
    input will always be greater than or equal to 2
  output: the index of the first number in the sequence with n digits (BigInt)
    -index starts at 1. i.e.
      Fibonnacci: 1, 1, 2, 3, 5...
      Fib Index: 1, 2, 3, 4, 5...

Data: working with BigInt so that JS doesn't lose accuracy with the high numbers
  can generate Fib sequence numbers in/from array,
  allows tracking last couple values to generate new value.
  convert numbers to strings to check length.
  return BigInt array length after final sequence generated/added

Algorithm:
1. declare fibSequence array init as [1, 1]
2. in while loop (checking length of last item in array is < target length)
  push(array[length - 2] + array[length - 1]) into array
3. return array size as bigint

*/

function findFibonacciIndexByLength(numberOfDigits) {
  let fibSequence = [1n, 1n];

  while (fibSequence.slice(-1)[0].toString().length < numberOfDigits) {
    let nextNumber = fibSequence.slice(-1)[0] + fibSequence.slice(-2)[0];
    fibSequence.push(nextNumber);
  }

  return BigInt(fibSequence.length);
}

console.log(findFibonacciIndexByLength(2n) === 7n);   // 1 1 2 3 5 8 13 - first 2 digit num
console.log(findFibonacciIndexByLength(3n) === 12n);  // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);

// console.log(findFibonacciIndexByLength(10000n) === 47847n);
// The last example may take a minute or so to run.


// LS solution is easier to read
// doesn't use an array which makes it less of a pain to access values

function findFibonacciIndexByLength2(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci; // nextNumber. could have repeated assignment here

  do { // do...while allows for checking condition after values are set
    fibonacci = first + second; // without assignment above, do...while needed
    count += 1n; // track count rather than finding array length
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length); // compare number < BigInt is OK

  return count; // no need for conversion
}

console.log(findFibonacciIndexByLength2(10n) === 45n);


// Part 2 - Recursion

function fibonacciR(fibSequenceIndex) {
  if (fibSequenceIndex <= 2) {
    return 1;
  } else {
    return fibonacciR(fibSequenceIndex - 1) + fibonacciR(fibSequenceIndex - 2);
  }
}

console.log(fibonacciR(1));       // 1
console.log(fibonacciR(2));       // 1
console.log(fibonacciR(3));       // 2
console.log(fibonacciR(4));       // 3
console.log(fibonacciR(5));       // 5
console.log(fibonacciR(12));      // 144
console.log(fibonacciR(20));      // 6765


// Part 3 - Procedural

/*

Problem: rewrite recursive fibonnaci function to be non-recursive (procedural)
  -recursion can be very slow in languages like JS not optimized for it
  input: positive integer `nth` meaning the nth number in the fibonnaci sequence
    -input may be a smaller number, 1 or 2
    -or up to maximum accurate number of 78 (keeps integers <= 16 digits)
  output: the corresponding fibonnaci number
  e.g.: 1 => 1; 2 => 1; 3 => 2; etc.

Data: work with numbers assigned to variables, reassign in loop while adding

Algorithm:
0. if input is <= 2 return 1
1. declare variable first = 1, second = 1, count = 2, and nextNumber;
2. in do...while loop
  add first and second together and reassign nextNumber to that
  first reassigned to value of second
  second reassigned to value of nextNumber
  count += 1
  break if count === nth
3. return nextNumber

*/

function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }

  let first = 1;
  let second = 1;
  let count = 2;
  let nextNumber;

  do {
    nextNumber = first + second;
    first = second;
    second = nextNumber;
    count += 1;
  } while (count < nth);

  return nextNumber;
}

console.log(fibonacci(1));        // 1
console.log(fibonacci(2));        // 1
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
console.log(fibonacci(78));       // 8944394323791464


// Part 4 - Memoization

/*

Problem: refactor the recursive fibonacci function to use memoization
  memoization: storing previously computed answers for future use
    -i.e. after computing for nth - 1, all results are stored for nth - 2
    -

Data: object for lookup table, numbers for sequence values and input/output
  -use an object/lookup table to store pairs of inputs and computed values

Algorithm:
1. before returning value from function, store computed value in object
2. before computing value, check if nth is in object already and return that
  i.e.:
1. declare variable for lookup table outside function so it isn't reassigned
  starting value: {1: 1, 2: 1}
2. in function, replace (nth <= 2) condition with if (object[nth])
  if lookup found, return that value
3. otherwise, return result of recursive calls after storing result in object

*/

const FIBONNACCI_MEMO = {1: 1, 2: 1};

function memoFibonacci(nth) {
  if (FIBONNACCI_MEMO[nth]) {
    return FIBONNACCI_MEMO[nth];
  } else {
    let result = memoFibonacci(nth - 1) + memoFibonacci(nth - 2);
    FIBONNACCI_MEMO[nth] = result;
    return result;
  }
}

console.log(memoFibonacci(1));       // 1
console.log(memoFibonacci(2));       // 1
console.log(memoFibonacci(3));       // 2
console.log(memoFibonacci(4));       // 3
console.log(memoFibonacci(5));       // 5
console.log(memoFibonacci(12));      // 144
console.log(memoFibonacci(20));      // 6765
console.log(memoFibonacci(78));      // 8944394323791464 // still fast
