function sum(postiveInteger) {
  let digits = postiveInteger.toString().split('').map(digit => Number(digit));
  return digits.reduce((total, digit) => total + digit);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
