// This class represents all that is common between Student and Mentor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact, email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }

  typeOfFunding(funding) {
    this.funding = funding;
  }
}

class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }

  // using super:
  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`;
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}

// DRIVER CODE

let student1 = new Student('Lupita', 'goofy', '@lupe');
student1.enroll('Jan 9');
student1.typeOfFunding('OSAP')
console.log(student1.bio());
console.log(student1);

let mentor1 = new Mentor('Jerry', 'tall', '@jerry');
mentor1.goOnShift();
console.log(mentor1.bio());
console.log(mentor1);


// can access the bio method for both Student and Mentor since it is part of the superclass