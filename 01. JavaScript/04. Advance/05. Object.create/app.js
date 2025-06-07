let person = {
  greet: function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};

const safwax = Object.create(person);
safwax.firstName = "Safwax";
safwax.lastName = "Webdev";
safwax.greet();

const john = Object.create(person, {
  firstName: { value: "John" },
  lastName: { value: "Doe" },
});

john.greet();
