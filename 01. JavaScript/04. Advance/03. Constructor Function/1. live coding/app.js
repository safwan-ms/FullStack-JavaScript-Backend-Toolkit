function CreatePeople(firstName, lastName, pl) {
  this.firstName = firstName; //window
  this.lastName = lastName;
  this.pl = pl;

  this.info = function () {
    console.log(
      `Hello my is ${this.firstName} ${this.lastName} & I love ${this.pl} `
    );
  };
}

const john = new CreatePeople("John", "Doe", "Golang");
const safwax = new CreatePeople("SafwaX", "WebDeV", "JavaScript");
console.log(john);
console.log(safwax);
john.info();

// NEW KEYWORD:
// 1. First create empty object {}
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using "new" keyword

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getInfo = function () {
    return `${this.title} by ${this.author}`;
  };
}

const book1 = new Book("Psychology of Money", "Unknown", 2020);
const book2 = new Book("Atomic Habits", "James Clear", 2022);

console.log(book1);
console.log(book2);

const bookRes1 = book1.getInfo();
console.log(bookRes1);
