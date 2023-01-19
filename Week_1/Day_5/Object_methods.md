## Object Methods and 'this'

The practice code for this can be found [here.](/Week_1/Day_5/Object_methods_code.js)

### Functions As Object Properties (AKA Methods)

- Object have properties that reference data (e.g. strings, numbers, arrays, etc.)

```javascript
// Examples of properties containing data
const person = {
  firstName: "Bob",
  lastName: "Smith",
};
```

- Object properties can be assigned function values
  - This helps us avoid writing out long code
  - Function exist inside of the object
  - Functions that are attached to objects are referred to as 'methods'
  - Other code can call these methods from outside the object
  - the keyword `this` is often found when working with methods
    - Lets us refer to the object that it is within

## Intro to `this`

- Need `this` when being used inside methods which points to the object where its function is found
- `this` referes to the object the method (function) was called on
