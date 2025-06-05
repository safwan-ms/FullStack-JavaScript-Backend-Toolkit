// create a factory function that generates different types of vehicles. Each vehicle object should have properties like type, brand, model, and year.

//Function for vehicle
function createVehicle(type, brand, model, year) {
  return { type, brand, model, year };
}

const vehicle1 = createVehicle(
  "MotorCycle",
  "RoyalEnfield",
  "Hunter 350",
  2050
);

const vehicle2 = createVehicle("Motorcycle", "Honda", "CBR500R", 2019);
console.log(vehicle1);
console.log(vehicle2);
