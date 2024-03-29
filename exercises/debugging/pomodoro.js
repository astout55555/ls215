"use strict";

// // original

// var tasks = 10;
// var checkmarks = 0;
// var sessions = 0;
// var minutes = 0;

// function pomodoro() {
//   console.log('Work.');

//   while (minutes < 25) {
//     minutes += 1;
//     console.log('...' + minutes); // never prints...
//   }

//   console.log('PLING!');

//   sessions += 1;
//   checkmarks += 1;

//   if (checkmarks === tasks) {
//     console.log('Done!');
//     return;
//   }

//   var rest;
//   if (sessions === 4) {
//     sessions = 0;
//     rest = 30;
//   } else {
//     rest = 5;
//   }

//   console.log('Rest for ' + rest + ' minutes.');

//   var minutes = 0;
//   pomodoro();
// }

// pomodoro();


/* eslint-disable */
// debugged:

var tasks = 10;
var checkmarks = 0;
var sessions = 0;
var minutes = 0;

function pomodoro() {
  console.log('Work.');

  while (minutes < 25) {
    minutes += 1;
    console.log('...' + minutes);
  }

  console.log('PLING!');

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  var rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log('Rest for ' + rest + ' minutes.');

  minutes = 0; // removed the var declaration to prevent shadowing
  pomodoro();
}

pomodoro();
