"use strict";

/* solved in ~35 minutes

Problem: build a function that can interpet a series of commands in a string
  register is basically the current num value; stack is an array of num values
    -starting register value is 0
  input: a single string, made up of 1 or more commands of various types
    -'n'
      place a value in the register only
    -'PUSH'
      push register onto the stack, but leave in register also
    -'ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER'
      perform operation with register and top of stack (pop it off)
    -'POP'
      remove topmost stack value and place in register
    -'PRINT'
      print current register value, don't remove it
    -each command is separated by a space
    -all inputs are valid
  output: whenever the 'PRINT' command is processed, print the register value
    -otherwise print nothing, default return value of undefined

Data:
  input: string with words and numeric integer chars (including negatives)
  output: if anything is printed, print the number value of register
  use integer division for 'DIV' and 'REMAINDER' operations

High Level Algorithm:
1. first, interpret the input string
2. then, process each command in order

Algorithm:
1. init register to 0
2. init stack to []
3. split input into commands array
4. iterate through commands array to process each
  with switch statement, execute each command
    'n' reassign register value
    'push' push register value into stack
    operator commands: register operator stack.pop
    'pop' register = stack.pop
    'print' console.log(register)


*/

/* eslint-disable */

function minilang(commandString) {
  let register = 0;
  let stack = [];
  let commands = commandString.split(' ');

  let error = false;

  commands.forEach(command => {
    if (Number.isInteger(Number(command))) {
      register = Number(command);
    } else if (command === 'PUSH') {
      stack.push(register);
    } else if (command === 'POP') {
      register = stack.pop();
      error = 'Error: stack is empty, cannot POP.';
    } else if (command === 'PRINT') {
      console.log(register);
    } else if (command === 'ADD') {
      error = 'Error: stack is empty, cannot ADD.';
      register += stack.pop();
    } else if (command === 'SUB') {
      error = 'Error: stack is empty, cannot SUB.';
      register -= stack.pop();
    } else if (command === 'MULT') {
      error = 'Error: stack is empty, cannot MULT.';
      register *= stack.pop();
    } else if (command === 'DIV') {
      error = 'Error: stack is empty, cannot DIV.';
      register = Math.floor(register / stack.pop());
    } else if (command === 'REMAINDER') {
      error = 'Error: stack is empty, cannot find REMAINDER.';
      register %= stack.pop();
    } else {
      error = `Error: invalid command ${command} cannot be processed.`
    }
  });

  return error || undefined;
}

// LS Solution figures out how to use switch statement to keep code cleaner:
// ends with a default statement which manages all integer inputs
// default: // does not need to find a specific value for `case` this way
//   register = parseInt(token, 10); // quickest way to pull out an integer

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT'); // outputs 7?
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

console.log(minilang('6 PUSH'));
// (nothing is printed because the `program` argument has no `PRINT` commands)
// returns undefined (no error)

console.log(minilang('MAKE FRIES'));
// returns error

console.log(minilang('ADD 3'));
// returns error

console.log(minilang('DIV 0'));
// returns error
