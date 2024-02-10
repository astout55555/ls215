"use strict";

/*

solved in 39 minutes; including refactored math-based solution, 46 minutes

Problem:
  input: positive integer--number of switches/lights, all start off
  output: array of integers representing the lights that end up on

Data:
  input: an integer
  during algorithm:
    option 1: work with arrays:
      index + 1 === light/switch number
      value in array is true or false (true is on)
        -maintains full array, preserving index info for light numbers
      can iterate through array and reassign elements to !value to toggle

Questions:
1. can we receive 0 as an argument (0 switches)--return empty array if so?
2. will argument always be valid type? always provided? (assume yes)
3. will integer ever be negative? (assume no)

Problem description / general algorithm:
1. declare array result, empty
2. in loop, push false values into array until length === numLights
3. then, iterate with forEach over full array, passing full array value in
  4. with each index, pass as the increment value to helper function
  5. helper function iterates by incrementer to toggle switch values
6. finally, map fully toggled array onto integer values based on index + 1
7. filter out the false values

*/

function lightsOn(totalSwitches) {
  let allLightsOn = [];
  while (allLightsOn.length < totalSwitches) {
    allLightsOn.push(false);
  }

  allLightsOn.forEach((_, index, allLights) => {
    toggleEveryNthLight((index + 1), allLights);
  });

  return allLightsOn.map((light, idx) => {
    if (light) {
      return idx + 1;
    } else {
      return false;
    }
  }).filter(light => light);
}

function toggleEveryNthLight(nth, lights) {
  let startIdx = nth - 1;

  for (let lightIdx = startIdx; lightIdx < lights.length; lightIdx += nth) {
    lights[lightIdx] = !lights[lightIdx];
  }
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(0));        // []

function mathLightsOn(switches) { // aka generate squares until value
  let results = [];

  for (let index = 0; index < switches; index++) {
    results.push((index + 1) ** 2);
    if (results[results.length - 1] > switches) {
      results.pop();
      return results;
    }
  }

  return results;
}

console.log(mathLightsOn(5));        // [1, 4]
console.log(mathLightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(mathLightsOn(0));        // []

// LS Solution:

/* eslint-disable */

function lightsOn2(n) {
  let lights = initializeLights(n);

  for (let i = 1; i <= n; i += 1) {          // rounds: 1..n
    lights = toggleLights(lights, i); // reassigns to map results
  } // no need for forEach since we don't need each light's value

  let result = [];
  for (let i = 0; i < n; i += 1) {           // indices: 0..n-1
    if (lights[i]) {
      result.push(i + 1);
    }
  }

  return result;
}

function initializeLights(n) { // helper function keeps main function cleaner
  const lights = [];

  for (let i = 0; i < n; i += 1) {
    lights.push(false);
  }

  return lights;
}

function toggleLights(lights, round) { // overlong line, but could be refactored
  return lights.map((light, index) => (index + 1) % round === 0 ? !light : light);
} // maps based on multiples instead of looping and reassigning as we go