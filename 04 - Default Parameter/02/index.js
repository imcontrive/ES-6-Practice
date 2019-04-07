/* Arrow Function */

const pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];

pizzas.map(function(pizza) {
  return `I 😍 ${pizza}`;
});

// Convert the above function into arrow function (explicit return)

// Convert the function into arrow function without curly braces (implicit return)

// Convert the above function into arrow function  also take the index from map and print the message like this `0. Deep Dish`

// Can you name a arrow function?

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879 },
  { first: "Isaac", last: "Newton", year: 1643 },
  { first: "Galileo", last: "Galilei", year: 1564 },
  { first: "Marie", last: "Curie", year: 1867 },
  { first: "Johannes", last: "Kepler", year: 1571 },
  { first: "Nicolaus", last: "Copernicus", year: 1473 },
  { first: "Max", last: "Planck", year: 1858 }
];
// Refactor to make it work
const inventorsName = inventors.map(inventor => {
  inventor.name;
});

// Refactor to make it work
const nameAndIndex = inventors.map(inventor, index => {
  [inventor.name, index];
});

// Refactor to make ot work
// inventors.filter(inventor => return inventor.year > 1867);
