"use strict";

/*

Problem: write comparison function for sorting version numbers
  input: two version number arguments, strings
    -format #.#.#.#...
    -each # could be any number of digits
    -could have any number of dividing decimals, including none
    -e.g. 3, or 1.2, or 2.3.34.2.1.1.0
    -cannot treat like numbers, e.g. 1.20 !== 1.2
  output: 1, -1, or 0, depending on which version is "greater"; or `null`
    -greater means comes later / is higher, i.e. 1.1 > 0.7
    -if first operand is greater, return 1, etc. (normal sorting rules)
    -return `null` if input is invalid:
      contains anything other than digits and `.`
      starts or ends with `.`
      contains 2 or more `.` in a row
      is not a string

Data:
  -input is strings; output is numbers or null
  -strings will be easier to work with if split into array of segments
  -when comparing segments, compare as numbers

Algorithm:
1. split each version into arrays of segments, map onto array of numbers
2. equalize the segment lengths (convert the shorter one)
  in loop, until legnths are equal
    compare array lengths
    push `0` onto the smaller array
3. in a for loop, iterate through and compare each segment
    if one segment is greater than the other, return result early
    otherwise, don't return anything and continue comparing segments
      (empty segment i.e. `undefined` compared to a number is always false)
4. return 0 if no difference found

*/

function isValidVersion(versionNumber) {
  if (String(versionNumber) !== versionNumber) {
    return false; // have to confirm input is a string first...
  } else if (versionNumber.match(/(^\.|[^.\d]|\.\.|\.$)/)) {
    return false; // ...match can only be called on a string
  } else {
    return true;
  }
}

function equalizeVersionSegmentLengths(version1Segments, version2Segments) {
  while (version1Segments.length !== version2Segments.length) {
    if (version1Segments.length > version2Segments.length) {
      version2Segments.push(0);
    } else {
      version1Segments.push(0);
    }
  }
}

function compareVersions(version1, version2) {
  if (!(isValidVersion(version1) && isValidVersion(version2))) {
    return null;
  }

  let version1Segments = version1.split('.').map(segment => Number(segment));
  let version2Segments = version2.split('.').map(segment => Number(segment));

  equalizeVersionSegmentLengths(version1Segments, version2Segments);

  for (let index = 0; index < version1Segments.length; index++) {
    if (version1Segments[index] > version2Segments[index]) {
      return 1;
    } else if (version1Segments[index] < version2Segments[index]) {
      return -1;
    }
  }

  return 0;
}

// LS Solution:

function compareVersions2(versionA, versionB) {
// checks for valid chars instead of invalid possibilities
  let validChars = /^[0-9]+(\.[0-9]+)*$/; // more readable

  // regexp.test(arg) will coerce arg to a string
  // in this case, most invalid input will return false because of the regex
  if (!validChars.test(versionA) || !validChars.test(versionB)) {
    return null; // will consider numbers valid, however, which could be okay
  }

  let aParts = versionA.split('.').map(Number);
  let bParts = versionB.split('.').map(Number);

  // using max to quickly find greatest length
  let maxLength = Math.max(aParts.length, bParts.length);

  for (let idx = 0; idx < maxLength; idx += 1) {
    let aValue = aParts[idx] || 0; // concise expression to add 0 when needed!
    let bValue = bParts[idx] || 0; // remember the assignment with || trick!

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
}

// Examples / Test Cases:

console.log(compareVersions('0.1', '1') === -1);
console.log(compareVersions('1', '1.0') === 0);
console.log(compareVersions('1.2', '1.0') === 1);
console.log(compareVersions('1.2', '1.2.0.0') === 0);
console.log(compareVersions('1.2', '1.2.0.1') === -1);
console.log(compareVersions('1.2', '1.18.2') === -1);
console.log(compareVersions('1.18.2', '13.37') === -1);
console.log(compareVersions('2', '1.99.99') === 1);
console.log(compareVersions(1, '2') === null);
console.log(compareVersions('1.0', 2) === null);
console.log(compareVersions('1.x', '1.0') === null);
console.log(compareVersions('1.3', ['1.4']) === null);
console.log(compareVersions('1.5', {1: '2.0'}) === null);
console.log(compareVersions('.1.2', '1.0') === null);
console.log(compareVersions('1..2', '1.0') === null);
console.log(compareVersions('1.', '1.0') === null);
console.log(compareVersions(NaN, '1.0') === null);
console.log(compareVersions(null, '1.0') === null);
console.log(compareVersions(undefined, '1.0') === null);

console.log(compareVersions2('0.1', '1') === -1);
