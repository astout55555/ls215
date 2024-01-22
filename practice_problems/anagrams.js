/*

Problem: given word and list of possible anagrams, return array of anagrams

Data: string, array of strings, return array of strings

Abstractions/Algorithm:
1. transform word into object of letter counts
2. transform word list into list of letter count objects
3. filter out the letter count objects which don't match the target word object
  -if a property (letter) is not found among target word properties (letters)
  -or if a letter count (value) is not equal to target word's letter count
4. transform list of remaining anagram letter count objects back to...oops!

Algorithm 2:
1. transform target word into letter char array, sort, rejoin as string
2. filter out list words which don't match target word after same transformation
3. return filtered list

*/

function sortString(word) {
  return word.split('').sort().join('');
}

function anagram(word, list) {
  return list.filter(candidate => sortString(candidate) === sortString(word));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
