function swapCase(string) {
  return string.split('').map(character => {
    if (/[a-z]/.test(character)) {
      return character.toUpperCase();
    } else if (/[A-Z]/.test(character)) {
      return character.toLowerCase();
    } else {
      return character;
    }
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
