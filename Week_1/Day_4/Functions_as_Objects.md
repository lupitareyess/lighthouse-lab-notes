### Functions are objects

- Can be referenced and passed as arguments
- Functions can be stored as variables and can have object properties

```javascript
// Assign function to variable 'myFn'
const myFn = function () {
  console.log("I am a function.");
};

// An attribute (someAttribute) is assigned to the function object
myFn.someAttribute = 42;
console.log(myFn.someAttribute);

// runner function is defined - runs the argument f that we pass
function runner(f) {
  f();
}

// Pass reference to myFn, which gets invoked by the runner function
runner(myFn);
```

### Callback Functions

A callback function:

- Is a function that is passed into another function

  - "Reciever" function accepts behaviour to perform by calling the _callback_ function
  - "Reciever" can call the _callback_ function at any time, and as many times as it want

  ```javascript
  // The second argument/parameter is expected to be a (callback) function
  const findWaldo = function (names, found) {
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      if (name === "Waldo") {
        found(); // execute callback
      }
    }
  };

  const actionWhenFound = function () {
    console.log("Found him!");
  };

  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
  ```

  - This demonstrates how a function can be treated as a regular value, and passed around to another function

## Anonymous Functions

- Callback functions are not typically declared or assigned to a variable, but instead written inline like so:

```javascript
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function (index) {
  console.log("Waldo is located at:", index);
});
```

- Anonymous functions normally declared when passed in as callbacks to other functions because the recieving function will give the paramater a name anyway
