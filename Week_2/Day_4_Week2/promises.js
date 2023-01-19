// Promises: then, catch, finally 
// resolve and reject are callback actions


const boilWater = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve();
    }
    return reject("Oven broke");
  })
}

// boilWater()
//   .then(() => console.log("Water is boiling"))
//   .catch(() => console.log("The oven is broken")); 


const putPastaInWater = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve()
    }
    return reject("Pasta fell on floor");
  })
}

//want to change together"

boilWater()
  .then(() => putPastaInWater())
  .then(() => console.log("Pasta boiling was a success"))
  .catch((error) => console.log(error));

//make sure we have the error parameter in our reject


// most common uses of promises is when we want to run network requests to fetch data from APIs 
console.log(startAnimation);
request("Http")
  .then((data) => parseData(data))
  .catch((err) => console.log(err))
  .finally(() => stopAnimation);