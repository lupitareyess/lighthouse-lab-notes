// using try-catch blocks in error handling
// using error object

// lets say you had the following:

// const someName = "Mike"


// // this will throw an error since we cannot reassign a constant variable 

// // lets use try-catch block:

// try {
//   someName = "Lupita"
// }
// catch (error) {
//   console.log("There was an error", error.name);
// }
// console.log(someName);

// now this will tell you there was an error
// there are many properties such as:
// error.name
// error.message 

// Handling inputs

// const logNameOfUserObject = (userObj) => {
//   console.log(userObj.name);
// }

// logNameOfUserObject();

// throws errors
// if we are unsure about errors and want to run something risky, can us try catch block

const logNameOfUserObject = (userObj) => {
  try {
    console.log(userObj.name);
  } catch (error) {
    console.log("There was an errror with user object");
    console.log(error);
  }
};

logNameOfUserObject();

//basically can handle errors and can help use debug code 

