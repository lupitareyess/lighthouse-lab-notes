// callbacks are used for code resuability and modularity

//action is the callback
const forEach = (array, action) => {
  for (const element of array) {
    action(element)
  }
}

const logThatElement = (element) => console.log(element);

const logThatElementButFancy = (element) => console.log("***" + element + "***");

const arr = [1, 2, 3, 4, 5]

//now run forEach function
// forEach(arr, logThatElement); => can now just change the parameter of the callback
forEach(arr, logThatElementButFancy);

// callbacks are helpful because now we dont have to redefine forEach everytime, can just input a new parameter instead

// CALLBACK CHAINING
// useful when working with async functions

// EXAMPLES:
// Boil water (wait)
// Put pasta in water (wait)
// Send friend to get some tomatoes from the store
// Remove the pasta from the water
// Finish the dish

const boilWater = (action) => {
  console.log("Starting to boil");

  setTimeout(() => {
    console.log("Water is boiling");
    action();
  }, 2000);
};

const putPastaInWater = (action) => {
  console.log("Pasta in the water");

  setTimeout(() => {
    console.log("Pasta is ready!");
    action();
  }, 2000);
};

const getTomatoes = (action) => {
  console.log("Running to the store");

  setTimeout(() => {
    // 50% chance we might fall
    if (Math.random() > 0.5) {
      // if we don't fall:
      console.log("Tomatoes are here!");
      return action(false);
    }
    // if we do fall
    console.log("Oh no");
    return action(true);
  }, 2000);
};


// now chaining it together:
// inside boilWater, we have putPastaInWater
// inside putPastaInWater we have getTomatoes
// inside getTomatoes we have an anonymous function that takes in error as a   paraemter and if succesful, we will eat out meal
boilWater(() => {
  putPastaInWater(() => {
    getTomatoes((error) => {
      if (error) {
        return console.log("Seems we'll be having butter pasta");
      }
      return console.log("Meal is ready!");
    });
  });
});


