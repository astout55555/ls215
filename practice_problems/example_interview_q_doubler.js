"use strict";

/* eslint-disable */

// Information obtained from Q&A:

// - elements that are numbers should be multiplied by 2
// - elements that are strings should be repeated twice via concatenation
// - other types of elements should be duplicated in the array
// - the input array should not be mutated
// - elements that are special number values should remain unchanged
// - elements that are any other type of number should be treated normally (multiplied by 2)
// - elements that are empty strings should remain unchanged
// - elements that are any other type of string should be treated normally (repeated twice)
// - the input array can contain a mixture of different types of elements
// - non-primitive elements should have their reference duplicated, not their value
// - elements that appear more than once should be treated normally (as specified above)
// - elements that contain nested arrays or objects should be treated normally (duplicated)
// - if the input array contains empty slots (a "sparse array"), they should be removed
// - if an inner array (element) contains empty slots, they should remain unchanged
// - if the input array contains any object properties, they should remain unchanged
// - if an inner array (element) contains any object properties, they should remain unchanged
// - if the array is empty, return an empty array
// - if multiple arguments are passed, ignore all but the first
// - if the argument is a string, treat it as an array of characters
// - if the argument is a non-negative integer, treat it as an array of digits
// - if the argument is an object, treat it as an array of its property values
// - all other kinds of inputs are invalid, and should return the string 'Invalid input'

// Practice writing test cases based on information obtained from Q&A:

doubler([2, -3, 0, 2.5, -0]); // [4, -6, 0, 5, -0]
doubler(['2', 'hello there', ' ']); // ['22', 'hello therehello there', '  ']
doubler([' ', 'aB', '@', '\n', '1']);  // ["  ", "aBaB", "@@", "\n\n", "11"]
doubler([null, undefined, NaN, true, false]);
// [null, null, undefined, undefined, NaN, NaN, true, true, false, false]
doubler([Math.PI, '', Infinity, -Infinity]); // [Math.PI, '', Infinity, -Infinity]
doubler([2, -2, 2, 2]); // [4, -4, 4, 4]
doubler([]); // []
doubler(1, -2, 'three'); // [2]
doubler('test'); // ['tt', 'ee', 'ss', 'tt']
doubler(26); // [4, 12]
doubler(null); // 'Invalid input'
doubler(NaN); // 'Invalid input'
doubler(undefined); // 'Invalid input'
doubler(true); // 'Invalid input'
doubler(false); // 'Invalid input'
doubler(-1); // 'Invalid input'
doubler(function () {}); // "Invalid input"
doubler(/abc/); // "Invalid input"
doubler();

let testCase = ['example', 1];
doubler(testCase); // ['exampleexample', 2]
console.log(testCase); // ['example', 1]

doubler([1, testCase]); // [2, ['example', 1], ['example', 1]]
console.log(testCase); // ['example', 1]

doubler([[testCase, 3], testCase]);
// [[['example', 1], ['example', 1], 6], ['example', 1], ['example', 1]]
console.log(testCase); // ['example', 1]

let emptyArray = [];
emptyArray.length = 4;
let anotherTest = [1, emptyArray];
anotherTest.length = 8;
doubler(anotherTest); // [2, [<empty slot> X 4], [<empty slot> X 4]]
console.log(emptyArray); // [<empty slot> X 4]
console.log(anotherTest); // [1, [<empty slot> X 4]]

let yetAnotherTest = {a: 1, b: 2, c: [1, 2, 3]};
doubler(yetAnotherTest); // [2, 4, [1, 2, 3], [1, 2, 3]]
doubler([yetAnotherTest.c, [yetAnotherTest.c]]);
// [[1, 2, 3], [1, 2, 3], [[1, 2, 3]], [[1, 2, 3]]]
console.log(yetAnotherTest); // {a: 1, b: 2, c: [1, 2, 3]}

let array = [1, 2];
array.foo = 'bar';
doubler(array); // [2, 4, foo: "bar"]
doubler([array]); // [[1, 2, foo: "bar"], [1, 2, foo: "bar"]]
