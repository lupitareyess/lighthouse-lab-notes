// example of properties containing data
// const person = {
//   firstName: 'Bob',
//   lastName: 'Smith'
// };

// can reference the object and its data
// example to great a person
console.log(person.firstName);
// prints 'Bob'
console.log('Hello, ' + person.firstName + ' ' + person.lastName);
// prints Hello Bob Smith

// redefining the above using an object property that has been assigned a function value
const person = {
  firstName: 'Bob',
  lastName: 'Smith',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

// now you can just say:
console.log('Hello' + person.fullName());
// prints Hello Bob Smith
//this is much cleaner than our previous way