const printItems = function(array) {
  array.forEach((item) => {
    // if current item is an array, shoudl call itself what that array
    if (Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  });
}

const array = ["A", [["B", ["C"]], [[["D"]], "E"]]];
printItems(array);

// main problem:

// recursive case is when item is an array - call the function again with that array
// base case is when the item is not an array, we just log it out

// recursion is good to use when there is a lot of nested arrays
// without recursions, would have to use a lot of for loops which is repetitive and messy

// SOMETHING TO KNOW FOR INTERVIEWS!!