type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User = UserInfo & AccountDetails;

const safwax: User = {
  first: "safwax",
  last: "WebDev",
  age: 18,
  email: "test@gmail.com",
  password: "strongpassword123",
};

console.log(
  `Name: (${safwax.first} ${safwax.last}) Age: (${safwax.age}) Email: (${safwax.email}) Password: (${safwax.password})`
);
