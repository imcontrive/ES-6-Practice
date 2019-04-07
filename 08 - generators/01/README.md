# Generators

Functions in JavaScript, always runs to completion i.e (run until return or end). `Generator Functions` on the other hand, (run until yield or return or end).
The most important use case for generator is to use them for something where you need the previous info to move forward for the next task.

Generator Function vs Normal Function
![Generator Function Vs Function](../assets/gen-fun.png)

Example:

```js
function* listOfBatches() {
  yield "Batch 1";
  yield "Batch 2";
  yield "Batch 3";
}
var list = listOfBatches();
list.next(); // {value: "Batch 1", done: false}
list.next(); // {value: "Batch 2", done: false}
list.next(); // {value: "Batch 3", done: false}
list.next(); // {value: undefined, done: true}
```
