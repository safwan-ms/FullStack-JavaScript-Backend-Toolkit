//Class declaration
class Person {
  constructor(firstName, lastName, age) {
    //Instance Members
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.printUserInfo = function () {
      return `Name :${firstName} ${lastName}`;
    };
  }

  //Prototype Members
  greet() {
    return `Hello there! ${this.firstName} ${this.lastName}`;
  }
}

class Programmer extends Person {
  constructor(firstName, lastName, age, pl, experience) {
    super(firstName, lastName, age); //This just calls the parent call constructor
    this.pl = pl;
    this.experience = experience;
  }
}

const safwax = new Programmer("Safwax", "Webdev", 19, "JavaScript", 1);

const john = new Person("Safwax", "Webdev", 20);
console.log(john.printUserInfo());
