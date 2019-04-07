# Array Destructuring

You can also destructure the values from array.

```js
const pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];
let [first, second] = pizzas;
```

You can use destructuring for swapping the value of two variable.

```js
var one = "first";
var two = "second";
[two, one] = [one, two]
// 👍 You are making an array with the value and destructuring with opposite name
```