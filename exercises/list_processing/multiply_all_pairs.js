function multiplyAllPairs(array1, array2) {
  let products = [];
  array1.forEach(number1 => {
    array2.forEach(number2 => {
      products.push(number1 * number2);
    });
  });

  return products.sort((operand1, operand2) => {
    if (operand1 > operand2) {
      return 1;
    } else if (operand1 === operand2) {
      return 0;
    } else {
      return -1;
    }
  });
}

// LS Solution uses a concise callback function for sort:
// `sort((a, b) => a - b)`
// this works because the return values don't need to be exactly -1, 0, or 1,
// as long as they are negative, 0, or positive--already guaranteed with numbers

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
