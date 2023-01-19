## Intro to Recursion

Recursion

- Example code can be found [here.](/Week_1/Day_5/Recursion_code.js)

- Alternative to traditional loops that lets us essentially do the same thing
- A function that calls itself until it doesn't

Example without recursion:

```javascript
let number = 0;
console.log(number);
while (number <= 12) {
  number += 2;
}
```

Same example with recursion:

```javascript
1.| function countEvenToTwelve(number) {
2.|   if (number <= 12) { // Recursive Case
3.|     console.log(number);
4.|     countEvenToTwelve(number+2);
6.| }
5.|   } // Base case, do nothing when number > 12
7.| countEvenToTwelve(0);
```

- Notice how on line 4, the function is calling itself
- Recursive function will call itself to execute a code (in a loop), and eventually stops depending on the condition
  - In this case, once the number is > than 12, the function stop calling itself and it "looping" ends
- Essentially, function calls itself with a modified input parameter after each time it calls itself
- Need the if statement to tell the function when to stop calling itself
  - **Recursive case** = condition that as long as its true, the function will continue to call itself
  - **Base case** = condition that if true, function will stop calling itself
    - Every time the function calls itself, the input will get closer to the base case
    - Function must have at least 1 recursive case and 1 base case to be considered recursive
