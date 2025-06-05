// let safwax = {
//   firstName: "Safwax",
//   lastName: "WebDev",
//   fullName: function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & I love JavaScript.`
//     );
//   },
// };

// let john = {
//   firstName: "John",
//   lastName: "doe",
//   fullName: function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & i love javascript`
//     );
//   },
// };

// john.fullName();

function createPerson(firstName, lastName, pl) {
  return {
    firstName: firstName,
    lastName: lastName,
    pl: pl,
    intro: function () {
      console.log(
        `Hello my name is ${this.firstName} ${this.lastName} & i love ${pl}`
      );
    },
  };
}

const safwax = createPerson("SafwaX", "WebDev", "JavaScript");
const john = createPerson("John", "Doe", "Rust");
safwax.intro();
john.intro();
