## OOP Part 1: Classes & Instances

### Classes

- Classes are like blueprints - acts as a template
- Use them to create instances of objects
  - Has info on how object is going to be
  - Create new objects using the class
- Classes have data in the form of value properties and behaviour in the form of methods

How do you declare a class?

- `class` keyword followed by the name of the class:

```javascript
class Pizza {}
```

- Class names should be a noun and first letter is capitalized

How do you create new object from a class?

- `new` keyword

```javascript
let pizza1 = new Pizza();
let pizza2 = new Pizza();
```

Here, pizza1 and pizza2 are instances of the `Pizza` class

- When you create an object using a class, it is an **instance** of that class
- Remember, pizza1 and pizza2 are objects

But wouldn't the same object be made?

- NO! The pizzas were created from the same class but they are seperate objects

```javascript
pizza1 === pizza2; // FALSE
```

### Methods and Properties

- Filling out the empty Pizza class from above:

  - Code I played around with found[here](./pizzaClass.js)

- To add method to a class, use this syntax:

```javascript
class SomeClass {
  methodName(parameters) {
    // this is a method
  }
}
```

- Use `this` keyword followed by property name to a property to a class. Also assign a value

```javascript
class SomeClass {
  someMethod() {
    this.hello = "hi"; // Created a property called hello
  }
}
```

### Intro to `constructor`

- `constructor` is a method that gets executed when an object instance is created from a class
  - It will be present in all the new instances
  - Think of this as setting a default state
  - We can pass values to the `constructor` method - this allows us to setup custom default values

## OOP Part 2: Inheritance

- We run into an issue of code duplication as we continue to create different types of objects
- For example:

```javascript
class Student {
  // this constructor is identical to that of a mentor!
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  // here is a method that is specific to students
  enroll(cohort) {
    this.cohort = cohort;
  }

  // identical! Smells of code duplication
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Mentor {
  // this constructor is identical to that of a student!
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }

  // identical! Smells of code duplication
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}
```

Notice how the Student and Mentor classes have identical `constructor` and `bio` methods

- Also share a few of the same properties (`name` and `quirkyFact`)
- In other words, we have 2 classes that share the same behaviour and state info

### This is where **inheritance** comes in!

- Remove duplication by moving the shared code into its own class
  - Building a new class based on an existing class
  - In this example, the new class is called `Person`

```javascript
// This class represents all that is common between Student and Mentor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}
```

```javascript
class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}
```

- In order to call info from `Person` we need to use the keyword `extend` as shown above, then followed by code that is specific to that class

- So, Student and Mentor are **subclasses** of the Person class - extensions of that class!
  - Person is the **superclass**

Code for this example can be found [here](./inheritance.js)

## OOP Part 3: Super

### Method Overriding and Super

What happens when you want a subclass to have a similar but different behaviour to its superclass?

- We can override or use `super`!
- Let say we want the mentors bios to start with "I'm a mentor at Lighthouse Labs" before saying "My name is..."

### Solution 1: Override

We'll want to override the bio method in the subclass:

```javascript
/ Superclass
class Person {
constructor(name, quirkyFact) {
  this.name = name;
  this.quirkyFact = quirkyFact;
}

bio() {
  return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
}
}

// Subclass
class Mentor extends Person {
// Completely re-define the bio method since it has more to say
bio() {
  return `I'm a mentor at Lighthouse Labs. My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
}
}

// The Student class doesn't need to define bio since it can just use the one from Person

// DRIVER CODE

const bob = new Mentor('Bob Ross', 'I like mountains way too much');
console.log(bob.bio());
```

- Method ovverriding = subclass implements a method that exist in the superclass
  - This isn't ideal though because we are still repeating some code

### Solution 2: Use `super`

```javascript
/ Super class
class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Mentor extends Person {
  // Mentor bios need to include a bit more info
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}

// DRIVER CODE

const bob = new Mentor('Bob Ross', 'I like mountains way too much');
console.log(bob.bio());
```

- Notice how we still need to have the bio() in the Mentor instance but now we can use `super` to basically bring in the rest that we want and finish off our sentence
  - `super` lets us access the superclass within our subclass
  - Helps us avoid repating code that is already in the superclass

### OOP Part 4: Getters and Setters

- Getters and setters are methods that let us get the value of a property or set the value of a property

But why would we want to use getters and setters when we can just access the method directly?

- 2 main reasons:
  1. Validating data before assigning it to a property
  2. Computing a value on the fly instead of pulling it out of a property

1. Validating data

- Using setter method allows us to have the object validate the value before it gets set
- For example, we can only order 's' 'm' or 'l' pizza but what if someone set the size to 'xl'?

```javascript
class Pizza {
  // ...

  // setSize now includes data validation
  setSize(size) {
    if (size === "s" || size === "m" || size === "l") {
      this.size = size;
    }
    // else we could throw an error, return false, etc.
    // We choose here to ignore all other values!
  }
}

// DRIVER CODE
let pizza = new Pizza();
pizza.setSize("s");
```

Now what if we wanted to keep track of the price of the pizza depending on size and toppings? We would have to manually update the price property everytime the price changed so theres a better way:

Use `get` and `set`!

```javascript
class Pizza {
  // ...

  // replace our custom getters / setters with these ones!
  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  set size(size) {
    if (size === "s" || size === "m" || size === "l") {
      this._size = size;
    }
  }
}
```

Now, when we want to access the price and size, we can do so as if they were value properties instead of methods properties

```javascript
// would do this before:
pizza.getPrice();

// now do this:
pizza.price;
```

- Price and size are defined as functions, but are being treated as values

  - This helps create a simpler interface

- Setter - allows for data validation before updating info
- Getter - lets you compute a value when its needed, rather than always keeping track of the value

## OOP Best Practices

So what is the goal of OOPs?

- To reduce duplicated code and increase reuseability
- To break code up into sensibly-divided units (modularity)

The following reviews some best practices when using OOP:

### Abstraction

- Arranges the complexity of computer systems
- Basically, lets the interface appear simple and the complicated stuff is hidden from the user
  - Having methods inside the class is keeping the stuff hidden away and is much easier to alter

### Private vs Public

- Properties can be `private` - can't be accessed outisde of the class they're created in
  - Can't do this in JS but we add `_` to the start of a property name to let others know that they shouldn't access the value directly

### Single Responsibility Principle

- States that a class should be responsible for a single part of an app's functionality - should only have one job
- Example:

```javascript
// Manage the state of a task
class Task {
  complete() {
    // Mark this task as complete
  }
  sendNotification() {
    // Send a notification to the user that their task is complete
  }
  saveToDatabase() {
    // Save this task to the database
  }
}

let task = new Task();
task.saveToDatabase();
task.complete();
task.sendNotification();
task.saveToDatabase();
```

Here, the class's job is to manage the state of a task but notice how it has 3 different things its responsible for

- We want to split this up like this:

```javascript
// Manage the state of a task
class Task {
  complete() {
    // Mark this task as complete
  }
}

class NotificationManager {
  sendNotification(task) {
    // Send a notification to the user that their task is complete
  }
}

class DatabaseManager {
  saveToDatabase(task) {
    // Save this task to the database
  }
}

let task = new Task();
databaseManager.saveToDatabase(task);
task.complete();
notificationManager.sendNotification(task);
databaseManager.saveToDatabase(task);
```

This way, if we introduce changes, code is less likely to break and is much easier to change if needed

- Each object now only has one reason to change

### Inheritance

- Use it to reduce duplicated code and make it more reusable!
