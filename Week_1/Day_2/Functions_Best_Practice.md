### Function Best Practices

#### **Growing Functions**

- If you find yourself writing the same good multiple times, may want to declare a function
- Function name should be clear as to what it will do

#### **Functions and Side Effects**

- Functions are divided into those that are called for their side effects, and those that are called for their return value
  - Printing a line is a side effect, for example
- Pure function: value-producing function that has no side effects and doesn't rely on them either
  - It will always produce the same value when it is called with the same arguments

#### **Funtion Naming Conventions**

- Avoid generic names
- Name it beginning with actions words
  - Ex: `createUser` or `sendUserData`
- Be consistent with naming conventions
- If joining existing project, adapt to the existing conventions
- Use camelCase names

#### **Functions Indentation**

- Indent contents of function using 2 soft spaces, no tabs

### Summary

1. Use verb/action based names
2. Use `camelCaseName`
3. Proper indentation
4. Functions should focus on single task: returing a value or causing a side effect. Break function into additional smaller functions if you notice that it is doing more than one thing
   - One task could be to compute and return a value
   - Another task could be to perform a side effect - e.g. logging a message to the screen
5. Data needed by functions should be passed as a parameter/argument (at a local scope) - avoid using globally-scoped variables in your functions
