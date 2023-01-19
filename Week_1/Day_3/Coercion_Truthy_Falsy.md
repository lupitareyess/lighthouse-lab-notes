### Coercion and Truthy/Falsy

#### **Double Equals, Triple Equals, and Type Coercion**

- `===` compares the type and value
  - If type is not the same, will return `false` right away
  - e.g `23 === "23"` evaluates to `false`
- `==` will try to force the compared values to be the same type - this is called **_type coercion_**
  - This can cause errors however and mess up our expected results

**NOTE:** It is best to use `===` in almost every case

#### **Not Equal**

- `!=` will force type coercion, before comparing the two values
- `!==` compares the type and value

**NOTE:** It is best to use `!==` in almost every case

#### **Truthy and Falsey**

Comparing 2 values in JS will return either `true` or `false`

- In JS, everything has an inherent Boolean value
  - This is referred to as `Truthy` and `Falsey`
- Most things are considered truthy expcept the following:

```javascript
// All of the following are inherently falsey:

False;
// False is False. Makes sense, right?

0;
// 0 is the only falsey Number

("");
// an empty string is falsey

null;
// a null, or empty value, is falsey.

undefined;
// an object that has not been defined is considered falsey.

NaN;
// Not a Number. You'll learn more about NaN as we go on.
```

#### **How To Use It**

- `Truthy` values lets us check conditions in our code
- For example. lets say we want to save users name to a String, but only if we don't already have something saved to `username`

```javascript
username = "";

if (!username) {
  username = "Siobhan";
}
```

Here, this says that if the username is false (empty) then add name to username

- The same concept can be applied to arrays
- For example, using the `Array.length` property will return 0 (false) if the Array is empty

```javascript
shoppingList = [];

if (!shoppingList.length) {
  shoppingList.push("coconut milk");
}
```

Here, this is saying if the array is empty, add coconut milk to it
