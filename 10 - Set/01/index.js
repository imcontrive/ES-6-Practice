// Set
let animals = new Set(["🐷", "🐢", "🐷", "🐷"]);

// guess the output of animals

const text =
  "The Set object lets you store unique values of any type, whether primitive values or object references.";

// remove all the duplicate letters from the text variable and give the length of string.

// Use for ... of to iterate ove the above result and console.log the characters

//Implement below methods using set and methods of set like add, delete, has etc.
var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([3, 4, 5, 6]);
// Implement isSuperSet function to check if `setA` is super set of `setA`
isSuperSet(setA, setB); // => true

// Implement union function to create the union of two sets
union(setA, setC); // => Set [1, 2, 3, 4, 5, 6]

// Implement intersection function that gives you the intersection of two set
intersection(setA, setC); // => Set [3, 4]

// Implement difference function that gives you the difference of two set
difference(setA, setC); // => Set [1, 2]
