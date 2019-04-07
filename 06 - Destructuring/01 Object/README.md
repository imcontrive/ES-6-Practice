# Destructuring

It helps in accessing the data easily.

```js
const inventory = {
  shoes: 10,
  socks: 6,
  shirts: 10,
  pants: 5
};
// To access the shoes and shirts value from inventory
var shoes = inventory.shoes;
var shirts = inventory.shirts;

// Using destructuring you can do the same with
// Where shoes and shirts is the name of the variable and also the properties inside the object
var {shoes, shirts } = inventory;
// When you want to name the variable differently you can do this
// {keyName, variableName}
var { shoes: myShoes } = inventory;
```

You can also set default value to the properties when you are destructuring.

```js
const inventory = {
  shoes: 10,
  socks: 6,
  shirts: 10,
  pants: 5
};
// You want to access a property and set a default value if it doesn't exists.
var { shoes, socks, tie = 3, jacket = 5 } = inventory;

// Default value with different variable name
var { shoes: myShoes = 5 } = inventory;
```