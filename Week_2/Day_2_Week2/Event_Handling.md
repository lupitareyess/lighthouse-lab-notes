## Event Handling and User Input

### User Events

- Action events = things done by users that should result in an action being taken
  - User events can be calleed at any time so must be able to hamdle them asynchronously

### Callbacks

- Callbacks help run async
- Callbacks are functions passed as an arugment to another function
  - Can run once another function is finished
  - They don't have to run right away, can be timed for later only after another function has occured

## User Input

- Anything that the user does on the web page or even on the command line
- Event handling helps deal with user input

## Event Handling User Input

```javascript
process.stdin.on("data", (key) => {
  process.stdout.write(".");
});

console.log("after callback");
```

- `stdin` = standard input
- `stdout` = standard output
- Use `on` method on `stdin` to register a callback
  - There is no set time that it'll run (unlike `setTimeout`) but instead runs any tuime the user provides input into the program
- The `after callback` here is actually executed before any input user is made
- For the above code to actually work, we need to add more:

```javascript
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on("data", (key) => {
  process.stdout.write(".");
});

console.log("after callback");
```
