// write function that will return the sum of every whole number from n down to 1


// start with the base case - stops the function from being called again
// here, base function is n = 1 since 1 is the smallest whole number we can add 

// then put recursive case - what will casue the function to be called again
// here, the recursive case is n > 1

function sumToOne(n) {
  if (n === 1) { // base case 
    return 1;
  }
  return n + sumToOne(n - 1); // recursive case
};

console.log(sumToOne(4));