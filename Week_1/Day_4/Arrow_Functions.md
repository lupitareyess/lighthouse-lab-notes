## Arrow Functions

- Handy to use when declaring anonymous functions (usually in the form of callbacks).
- Helps us make small, inline, single purposes functions easier than the original way
- They are a cleaner, shorter syntax for declaring anonymous functions

```javascript
// BEFORE: anonymous callback as function expression
[1, 2, 3].forEach(function (num) {
  console.log("num: ", num);
});

// AFTER: anonymous callback as arrow function
[1, 2, 3].forEach((num) => {
  console.log("num: ", num);
});
```

- Notice how `function` is gone.

For one liners, we can remove even more:

```javascript
[1, 2, 3].forEach((num) => console.log("num: ", num));
```

- Notice how now, both `function` and the `{}` have been removed.
