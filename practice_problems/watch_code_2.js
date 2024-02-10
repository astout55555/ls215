function checksum(string) {
  let digitChars = string.replace(/\D/g, '');

  let rightToLeftDigits = digitChars.split('').reverse().map(char => Number(char));

  let alteredDigits = rightToLeftDigits.map( (digit, index) => {
    if (index % 2 === 1) {
      let doubled = digit * 2;
      return (doubled >= 10) ? (doubled - 9) : doubled;
    } else {
      return digit;
    }
  });

  let sum = alteredDigits.reduce((accumulator, digit) => {
    return accumulator + digit;
  }, 0);

  return sum % 10 === 0;
}

function getValidLuhn(string) {
  if (checksum(string)) {
    return string;
  }

  let newString;
  for (let newDigit = 0; newDigit <= 9; newDigit++) {
    newString = `${string}${newDigit}`;

    if (checksum(newString)) break;
  }

  return newString;
}

console.log(checksum('1111')); // false
console.log(checksum('8763')); // true
console.log(checksum('2323 2005 7766 3554')); // true
console.log(checksum('2323-2005.7766seven3554')); // true

console.log(getValidLuhn('232320057766355')); // '2323200577663554'
console.log(getValidLuhn('2323200577663554')); // '2323200577663554'
console.log(getValidLuhn('0001')); // '00018'
