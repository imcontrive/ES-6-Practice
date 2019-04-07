/* var */

"use strict";
// Problem 1
// Guess the output and reason for the output.
function sayHello() {
  var user = "Hello User";
}

sayHello();

console.log(user);

// Problem 2
// Change the code to make problem 2 work

function sayHelloAgain() {
  var user = "Hello User";
}

sayHelloAgain();

// Problem 3
// Guess the output of the following code

for (var i = 0; i < 10; i++) {
  // Doing nothing
}
console.log(i);

// Problem 4
// Guess the output

for (; i < 10; ) {
  var username = "Inside For Loop";
}
console.log(username);

// Problem 5
// Guess the output
var name = "Jack";
var name = "Jones";
console.log(name);

// Problem 6
// What's the output.

(function() {
  var user = "Sam";
})();

console.log(user);

// Problem 6
// What's the output and why?

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(`The Number is ${i}`, 1000));
}

// Problem 7
// What's the output and why?
console.log(pizza);
var pizza = "pizza 🍕🍕";
