# Set

The Set object lets you store unique values of any type, whether primitive values or object references.
[Set Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

### Initialize a Set

A Set is initialized by calling:

```js
const s = new Set();
```

### Add items to a Set

You can add items to the Set by using the add method:

```js
s.add("one");
s.add("two");
```

A set only stores unique elements, so calling `s.add('one')` multiple times won't add new items.

You can’t add multiple elements to a set at the same time. You need to call add() multiple times.

### Check if an item is in the set

Once an element is in the set, we can check if the set contains it:

```js
s.has("one"); //true
s.has("three"); //false
```

### Delete an item from a Set by key

Use the delete() method:

```js
s.delete("one");
```

### Determine the number of items in a Set

Use the size property:

```js
s.size;
```

### Delete all items from a Set

Use the clear() method:

```js
s.clear();
```

### Iterate the items in a Set

Use the keys() or values() methods - they are equivalent:

```js
for (const k of s.keys()) {
  console.log(k);
}
for (const k of s.values()) {
  console.log(k);
}
```

### The entries() method returns an iterator, which you can use like this:

```js
const i = s.entries();
console.log(i.next());
```

# A WeakSet

A WeakSet is a special kind of Set.

In a Set, items are never garbage collected. A WeakSet instead lets all its items be freely garbage collected. Every key of a WeakSet is an object. When the reference to this object is lost, the value can be garbage collected.

Here are the main differences:

1. You cannot iterate over the WeakSet
2. You cannot clear all items from a WeakSet
3. You cannot check its size
4. A WeakSet is generally used by framework-level code, and only exposes these methods:

add()
has()
delete()
