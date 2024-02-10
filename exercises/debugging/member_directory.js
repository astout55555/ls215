"use strict";

// original

// const memberDirectory = {
//   'Jane Doe': '323-8293',
//   'Margaret Asbury': '989-1111',
//   'Callum Beech': '533-9090',
//   'Juanita Eastman': '424-1919',
// };

// function isValidName(name) {
//   return (/^\w+ \w+$/).test(name);
// } // `\w` is any valid word char, including 0-9 and _

// function isValidPhone(phone) {
//   return (/^\d{3}-\d{4}$/).test(phone);
// }

// function validMemberInfo(name, phone) {
//   return isValidName(name) && isValidPhone(phone);
// }

// function addMember(name, phone) {
//   if (validMemberInfo(name, phone)) {
//     memberDirectory[name] = phone;
//   } else {
//     console.log('Invalid member information.');
//   }
// }

// addMember('Laura Carlisle', '444-2223');
// addMember('Rachel Garcia', '232-1191');
// addMember('Earl 5mith', '331-9191');

// console.log(memberDirectory);


// debugged:

const memberDirectory = {
  'Jane Doe': '323-8293',
  'Margaret Asbury': '989-1111',
  'Callum Beech': '533-9090',
  'Juanita Eastman': '424-1919',
};

function isValidName(name) {
  return (/^[a-z]+ [a-z]+$/i).test(name); // fixed regex
}

function isValidPhone(phone) {
  return (/^\d{3}-\d{4}$/).test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log('Invalid member information.');
  }
}

addMember('Laura Carlisle', '444-2223');
addMember('Rachel Garcia', '232-1191');
addMember('Earl 5mith', '331-9191'); // logs error
addMember('Early_Byrd', '555-5555'); // new test

console.log(memberDirectory);
