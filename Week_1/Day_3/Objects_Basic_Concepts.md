## **Objects - Basic Concepts + Iteration**

**Objects Overview**

Objects:

- Have key:value pairs
- Keys are typically always strings
- Values can be any type
- The same key cannot appear twice in an object

**Object Literals**

- Objects have a literal syntax using `{}`

```javascript
const tinyObject {size : "Tiny"}
```

Here, `size` is the key, and `tiny` is the value it holds.

**Accessing Object Values**

- Use square-bracket notation

  - When doing so, the key must be quoted (as a string)
  - Failing to do so would make the program consider it as a varibale, instead of a string literal
  - Remember, although note quoted as a string in the object, the key is a string literal!! That is why we need to quote it when we want to access it using bracket notation

  ```javascript
  const person = { firstName: Lupita };
  console.log(person["firstName"]);
  //prints Lupita
  ```

- Can also access value using dot notation

```javascript
const person = { firstName: Lupita };
console.log(person.firstName);
//returns Lupita
```

**Accessing a Key That Doesn't Exist**

- Will return a value of `undefined`

**Assigning a New Value to a Key**

- Can use square-bracket notation to assign new values to new or existing keys

```javascript
const mary = { name: "Mary Sue" };
//reassign name
mary["name"] = "Mary Jane";
//define new key
mary["age"] = 22;
mary; //
//prints: {name, 'Mary Jane, age: 22}
```

**Objects as Values**

- We can nest objects within objects

```javascript
const person = {
  name: "Paul",
  address: {
    street: "310 W 95th",
    city: "New York",
    zipCode: 10027,
  },
};
```

Here, the key `address` has an object as its value.

- To access a value within a nested object, need to call the key of the outside object followed by the inside one, like so:

```javascript
person["address"]["city"]; // => "New York"
```

**Object.keys**

- Can inspect objects keys using `Object.keys(...)`, which will return array of keys

**Iterating Over Objects**

```javascript
var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14,
};
```

- Here, there are 8 keys, we want to iterate through them:

```javascript
for (let planet in planetMoons) {
  let numberOfMoons = planetMoons[planet];
  console.log("Planet: " + planet + ", # of Moons: " + numberOfMoons);
}
```

- Here, the variable `planet` iterates over each key ("mercury", "venus") using the for-loop

**NOTE:** Objects have to use `for...in` loops for iteration
