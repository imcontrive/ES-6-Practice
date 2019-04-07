# for of
The for...of statement creates a loop iterating over iterable objects.
What are iterable objects
1. String
2. Array
3. NodeList
4. HTMLElement
5. Map
6. Set

```js
const cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];
for(let cut of cuts){
  console.log(cut);
}
```