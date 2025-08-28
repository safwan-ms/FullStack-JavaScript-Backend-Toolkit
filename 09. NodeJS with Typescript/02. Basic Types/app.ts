console.log("Hello NodeJs from typescript");

// Basic Types
let isDone: boolean = false;

let num: number = 21;

let str: string = "Safwax";

let list: number[] = [1, 2, 3];

let products: string[] = ["product 1", "product 2", "product 3"];
// Or
let student: Array<string> = ["student 1", "student 2", "student 3"];

let randomValue: any = 2;
randomValue = "Safwax";
randomValue = false;

let xyz: undefined = undefined;
let yz: null = null;

enum Color {
  Red,
  Green,
  Blue,
}

let d: Color = Color.Green;

// Tuple

let abc: [string, number] = ["hi", 400];

//interface, types
interface User {
  name: string;
  id: number;
  email?: string;
  readonly createdAt: Date;
}

const user: User = {
  name: "Safwax",
  id: 1,
  // email: "safwan.anasms@gmail.com",
  createdAt: new Date(),
};

type Product = {
  title: string;
  price: number;
};

const product1: Product = {
  title: "Product 1",
  price: 200,
};

// Functions with type annotations

function multiply(a: number, b: number): number {
  return a * b;
}

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

function greet(name: string, greeting?: string): string {
  return `${name} ${greeting}`;
}

console.log(greet("safwax", "hello"));
