## Intro to Object Oriented Programming (OOP)

- Goal of OOP is to give us a plan for modularity
  - **Use objects to keep code modular and reduce repetition**

## Simple OOP in JavaScript

- In OOP, use objects to group related variables and functions - allows us to keeo our code organized
- Remember, and object has key-value pairs, these are known as _PROPERTIES!_

  - Properties can represent that `state` of that object
  - When propertys value is a function, this is called a _METHOD!_

  ```javascript
  const dog = {
    sound: "woof", // Property
    breed: "shih tzu", // Property
    speak: function () {
      // Method
      console.log(`${this.dogBreed} says ${this.dogSound}`);
    },
  };
  ```

- Object also have _BEHAVIOURS_ - takes the form of methods (functions)

## `this`

- Use `this` within line of code
  - It is a keyword and has its own function
  - Needs context to make sense
  - Value is determined at the time it is called, and depends on how and where its called
- if we use `this` inside a method, `this` refers to the object that the method was called on
- Look at the example:

```javascript
const dog = {
  sound: "woof",
  speak: function () {
    console.log(this.sound);
  },
};

dog.speak();
```

- `dog.speak()` logs the sound property of the dog object but since speak is a method of the dog object, `this` referes to the dog therefore `this` and dog are the same
- You would ue `this` like this:

```javascript
const dog = {
  sound: "woof",
  speak: function () {
    console.log(this.sound);
  },
  teachMeSomething: function () {
    if (dog === this) {
      console.log("dog === this");
    }
    this.speak();
  },
};

dog.teachMeSomething();
```

- dog and `this` are equal to each other!

**Take away**

- Whenever method is accessing a property or another method on the same object, use `this`
