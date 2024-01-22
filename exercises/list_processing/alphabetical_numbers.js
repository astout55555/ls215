const NUMBER_NAMES = [
  'zero', 'one', 'two', 'three',
  'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven',
  'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen',
];

function alphabeticNumberSort(arrayOfIntegers) {
  let arrayOfNames = arrayOfIntegers.map(index => NUMBER_NAMES[index]);
  let sortedNames = arrayOfNames.sort();
  return sortedNames.map(name => {
    return Number(NUMBER_NAMES.findIndex(element => element === name));
  });
}

console.log(
  alphabeticNumberSort(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
