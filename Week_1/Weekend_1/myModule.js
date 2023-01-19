const sayHelloTo = function(person) {
  console.log(`Hello, ${person}`);
}

// this will allow it to be exported
module.exports = sayHelloTo;