# Spread Operator

Spread operator takes every elements from iterable (Array, String, argument, NodeList etc) and spread it.

```js
const pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
];

const cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
];
// combines two arrays together
var final = [...pizzas, ...cuts];
// If you want to add a new element in between
var inBetween = [...pizzas, '&&', ...cuts];
// Can be used to take a copy of array
var newCopy = [...pizzas];
```
