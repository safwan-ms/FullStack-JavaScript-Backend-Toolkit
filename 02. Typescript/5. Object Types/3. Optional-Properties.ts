type User = {
  name: string;
  age?: number;
  location: string;
};

const user: User = {
  name: "safwax",
  age: 20,
  location: "Arabic",
};

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);
