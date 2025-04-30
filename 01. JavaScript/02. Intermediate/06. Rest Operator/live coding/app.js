function user(...userData) {
  console.log(userData);
}

user("safwax", 17, "Male", "Programming");

// ---------------------------
double = (...numbers) => numbers.map((num) => num * 2);
console.log(double(1, 2, 3, 4, 5));
// ---------------------------

function person(firstName, lastName, ...hobbies) {
  console.log("First Name: ", firstName);
  console.log("Last Name: ", lastName);
  console.log("Hobbies: ", hobbies);
}

person("safwax", "WebDev", "programming", "football");
