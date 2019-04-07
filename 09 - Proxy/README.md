# Proxy

The Proxy object is used to define custom behavior for fundamental operations of the objects. Those operations can be:

1. Property lookup (object.key)
2. Assigning a value (object.key = value)
3. Enumeration
4. Function invocation

[Proxy Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

```js
const user = {
  name: "Peter Pan",
  username: "peterpan",
  age: 23
};
const userProxy = new Proxy(user, {
  get(target, key) {
    return target[key].toUpperCase();
    // You ca hijack the access property and change the output the way you want.
  }
  set(target, key, value){
    return target[key] = value.toUpperCase().trim();
    // You hijacked adding property to obj and did the required changes you wanted. Like trim and converting to uppercase.
  }
});
userProxy.name;
//  You are looking for the  {name: "Peter Pan", username: "peterpan", age: 23} name
userProxy.batch = "Batch 1         ";
// userProxy = {
//   name: "Peter Pan",
//   username: "peterpan",
//   age: 23,
//   batch: "BATCH 1"
// }
```
