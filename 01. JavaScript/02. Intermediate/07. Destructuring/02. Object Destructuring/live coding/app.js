// In object destructuring order doesn't matter but the name does matter

// --------------------------
// Extracting a property
const student = { name: "safwax", position: "First", rollno: "27" };
const { name, position, rollno } = student;
console.log(name); // safwax
console.log(position); // First
console.log(rollno); // 27
// --------------------------
