# Problem 1

## Description

A distinct string is a string that is present only once in an array.

Given an array of strings, `arr`, and an integer, `k`, return the `k`th distinct string present in `arr`. If there are fewer than `k` distinct strings, return an empty string `""`.

Note that the result string is the one encountered earliest in the array.

## Example

`distinctString(["d","b","c","b","c","a"], 2); // "a"`

## Questions

1. What should the function output if it receives 0 or a negative integer for `k`?
2. Do I need to handle other types of invalid input, for either argument?
3. Should different types of invalid input be handled differently?
4. Should the function handle a case in which insufficient arguments are provided--either 0 or 1 only?
5. Can the array of strings include empty strings, and if so should an empty string be counted as potentially distinct?

### Questions I didn't think to ask:

6. Can the array be sparse? If so, how should I handle the missing elements? [important]
7. Can the array contain any number of elements?
8. Can the array be empty? If so, what should I return in that case? [important]
9. Will strings always be one character long, or can they be any length? 

# Problem 2

## Description

Given an array of integers, `nums`, return the third largest number in the array. If the third largest number does not exist, return the greatest number.

You are not allowed to sort the array.

## Example:

`thirdMax([3, 2, 1]); // 1`

## Questions

1. Can the array be empty? If so, what should I return?
2. How should I handle invalid input? E.g. something other than an array? What about an array with something other than numbers?
3. What should the function do if not given any arguments?
4. Can the array be sparse?
5. Can the numbers in the array be duplicates? If so, how should I interpret the case of something like `[3, 2, 2, 1]`--do I return `2` because there are two numbers tied for 3rd largest, or `1` because it's the 3rd largest of the different numbers? Could all the numbers be the same?

### Other questions...

6. Will the array ever contain non-integers? If so, how should I handle those?

# Problem 3

## description

Write a function, `primeNumberPrinter`, that prints all prime numbers present as substrings in a given string.

## example

`primeNumberPrinter("a4bc2k13d"); // [2, 13]`

## Questions

1. What should I print if there are no prime numbers found among the substrings?
2. Should I print duplicate prime numbers?
3. How should I handle invalid input (something other than a string, or not being passed an argument)?
4. Can the string contain characters other than alphanumeric ones?
5. Can the string be empty? Should the function return something different than when it receives a string without prime numbers?

### Other Q's

6. In what order should the numbers be listed in the output array? Is it the order that the numbers appear in the string? [or in ascending order?]
7. Can the string contain negative numbers, such as `"a-4bc2k-13d"`? What should I do in this case[--or should those be considered positive numbers]?

# Problem 4

## Description

​ Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all duplicated elements removed. Treat numbers and number strings (e.g., 1 and '1') as duplicates, and keep the one that comes first in the result.

## Example

```javascript
flattenAndUnique([]); // []
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']
```

## Questions

1. To ensure I understand, if the arrays contain e.g. '3' and 3, I should keep the string '3' in the result and remove the number 3?
2. I see that the argument could be a flat empty array. Could it be anything other than this or a 2-dimensional array, e.g. a flat array with elements, or a two-dimensional array with empty arrays for elements?
3. Could the argument be missing, or be something other than an array? If so, how should I handle invalid input? What if I receive two array arguments?
4. Can the arrays contain anything other than numbers and strings? What about `NaN`?
5. If so...could the array argument be nested more deeply than two-dimensions (i.e. could any elements be themselves objects or arrays)? If so, do I consider two objects or arrays with the same values as duplicate elements?
6. Should I treat number strings (like '1.0') as duplicates of equivalent number values (like 1)?
7. Should I treat anything else as a duplicate? Like 'true' and `true`?

### Other questions

8. Will all the elements of the array argument be arrays themselves? If not, what should I do?
9. Can the array be sparse? If so, how should I handle the missing elements?
