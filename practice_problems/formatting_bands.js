"use strict";

/*

Problem: process the data to clean it up
-change all band countries to 'Canada'
-capitalize all band name words
-remove all dots from band names

Data: given an array of band objects, relevant properties have string values
-return array of band objects with data changed

Abstraction/Algorithm:
0. iterate through each band and...
  1. transform band country property values by setting each to 'Canada'
  2. transform band name values by transforming each with multiple changes:
    -first, replace all dots with ''
    -second, use capitalize helper function
      -split string into words, transform into words with first letter uppercase
      -rejoin into band name and return

*/

// band data:
let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

// // my solution's functions--condensed but mutates data and is less clear:
// function capitalize(string) {
//   return string.split(' ')
//     .map(word => word[0].toUpperCase() + word.slice(1))
//     .join(' ');
// }

// function processBands(data) {
//   data.forEach(band => {
//     band.country = 'Canada';
//     band.name = capitalize(band.name.replaceAll('.', ''));
//   });

//   return data;
// }

console.log(processBands(bands));

// returns the mutated bands array:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]

// LS improved solution without side effects and more abstracted:

function processBands(bands) {
  return bands.map(band => { // map is the best choice for the main task
    let capitalizedName = capitalizePhrase(band.name);
    let newBandName = removeDotsInString(capitalizedName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active,
    };
  });
}

function capitalizePhrase(phrase) { // no mention of "band" needed, more abstract
  return phrase.split(' ')
    .map(word => capitalizeString(word))
    .join(' ');
}

function capitalizeString(string) { // smaller piece of capitalization process
  let initial = string[0].toUpperCase();
  let rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInString(string) { // separate function makes this clearer
  return string.replace(/\./g, '');
}
