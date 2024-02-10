"use strict";

/*

Solved in ~31 minutes

Problem:
  input: year (number)
    -greater than 1752 (after adoption of Gergorian Calendar), could be future
    -assume same calendar system will be used in the future as well
  output: number of Friday the 13ths in that year

Questions:
1. can argument be missing? invalid (something other than an integer > 1752)?
  (assuming no)

Data:
  -working with numbers for input/output
  -must work with date objects to find necessary calendar details

Algorithm 1:
1. take input year and use it to create a new Date object, Jan 1st, year
2. declare var for counting Friday 13ths, set to 0
3. find the day of week for the date object (for Jan 1st of that year)
4. find difference between 5 (Friday) and return value of day of week (0-6)
5. set date object day of month to the 1st plus that difference
  if it was a Saturday (6), add 6 to get Friday of the next week
6. loop until Date object year changes, adding 7 days and checking if the 13th
  -add 1 to count everytime a Friday the 13th is found
7. return count

Algorithm 2:
1. declare var for counting Friday 13ths, set to 0
2. create array of month abbreviations, 0-11 matching 'Jan' to 'Dec'
3. iterate over months, create Date objects, day 13, input year
4. for each one, check day of week, and if 5 (Friday), count += 1
5. return count

*/

// // original solution:
// function fridayThe13ths(year) {
//   const MONTH_ABBREVIATIONS = [
//     'Jan', 'Feb', 'Mar', 'April',
//     'May', 'June', 'July', 'Aug',
//     'Sept', 'Oct', 'Nov', 'Dec'
//   ];

//   let countOfUnluckyDays = 0;
//   MONTH_ABBREVIATIONS.forEach(month => {
//     let the13th = new Date(`${year}-${month}-13`);
//     let isFriday = the13th.getDay() === 5;
//     if (isFriday) {
//       countOfUnluckyDays += 1;
//     }
//   });

//   return countOfUnluckyDays;
// }

// Turns out, creating Dates with date strings is unreliable, very error-prone.
// Using 'Oct' is 1 day off from using '10', for what seems to be a similar
// reason as the difference between '02' and '2' for the month--if '02' is
// used along with a 2 digit day like '13' or '07', then the time is set to
// 00:00 instead of 07:00, which is the local time zone, which might cause
// '00:00' to be interpreted as the day before unless you manually provide the
// time with 'T00:00'. local time zone causes this only if before UTC/GMT.

// Best practice is to create dates with arguments instead!, i.e.:
// `new Date(year, monthIndex, dayOfMonth)`

// refactored:
function fridayThe13ths(year) {
  let countOfUnluckyDays = 0;
  for (let monthIdx = 0; monthIdx < 12; monthIdx++) {
    let the13th = new Date(year, monthIdx, 13);
    let isFriday = the13th.getDay() === 5;
    if (isFriday) {
      countOfUnluckyDays += 1;
    }
  }

  return countOfUnluckyDays;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
