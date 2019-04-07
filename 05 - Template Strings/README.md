# Tagged Template Literals

One bonus feature that you get with template literal is the ability to tag them. That means you can run that template literal through a function and rather than browser assigning the values to the variables you control how value to the variables are assigned.

To do that you need to do the following:
```js
// define the function
// The function gets access to the whole string and all the variable used in the string
// So to access all the variables(total, male, female) we can use the rest parameter
// You can use the tag function to build the string rater than relying 
function tag(strings, ...values){
  console.log(strings, values);
  // strings: ["The total number of users are ", " and ", " are males and ", " are females", raw: Array(4)]
  // values: [21324, 10000, 11324]
  let str = '';
  strings.forEach((string, i) => {
    str += string + (values[i] || '');
  })
  return str;
}
// use the name of the function in front of the template literal like below
var users = {
  total: 21324,
  male: 10000,
  female: 11324
}
var tagged = tag`The total number of users are ${users.total} and ${users.male} are males and ${users.female} are females`;
// You tagged the template literal with tag function
```
You can use the function to much more. Like highlight all the values.
```js
function tag(strings, ...values){
  let str = '';
  strings.forEach((string, i) => {
    str += `${string}<span style="color: yellow"${values[i] || ''}</span>`;
  })
  return str;
}
var users = {
  total: 21324,
  male: 10000,
  female: 11324
}
var tagged = tag`The total number of users are ${users.total} and ${users.male} are males and ${users.female} are females`;
```