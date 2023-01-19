### Scope in JS

#### **Global vs Local Scopes**

1. Global
   - Globally-scoped variables are available everywhere in the code
2. Local
   - Locally-scoped varibales are only available within the function that it is defined in

Example:

```javascript
let myGlobalVar = "global";

const printMyVars = function () {
  let myLocalVar = "local";
  console.log("-- Inside printMyVars --");
  console.log("myLocalVar is:", myLocalVar);
  console.log("myGlobalVar is:", myGlobalVar);
};

printMyVars();

console.log("-- Outside of printMyVars now --");
console.log(myLocalVar);
```

Here, `myLocalVar` is defined within the function therefore, if why try to `console.log` in our global environmnent, we will get an error

**Note**: Scoping can overwrite variables

- Variables may have the same name in their global and local scale
- Local variables take precedence within a function but outside of the function, the global variable (with the same name) remains unchanged

Ideally, you want to avoid having functions read outer scope variables

- This is where parameters come in
- Parameters make data/info available within functions inner scope

```javascript
const person = "Martha";

// BAD
const sayHelloBadly = function () {
  console.log(`Howdy, ${person}`);
};
sayHelloBadly(); // Works, but not ideal!

// GOOD
const sayHelloGoodly = function (name) {
  console.log(`Howdy, ${name}`);
};
sayHelloGoodly(person);
```

Here, `sayHelloBadly` is accessing a global variable - we want to avoid this

- Insead, create a parameter which can then be used in the function
