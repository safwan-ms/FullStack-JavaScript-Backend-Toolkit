// Create a person object and store your name & age
// -> Also create a method name (greetRegular) by using a regular function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`
// -> Create one more method name (greetArrow) using arrow function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`

// *************** SOLUTION

const person = {
  name: "Safwax",
  age: 20,

  // Method using a regular function
  greetRegular: function () {
    return `Hello my name is ${this.name} & I'm ${this.age} years old`;
  },

  // Method using an arrow function
  greetArrow: () => {
    return `Hello, my name is ${this.name} & I'm ${this.age} years old.`;
  },
};

const res = person.greetRegular();
const res1 = person.greetArrow();

console.log(res);
console.log(res1);
