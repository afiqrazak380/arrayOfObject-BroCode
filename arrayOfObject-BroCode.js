// How to create an array of object and pass it into a function

class Car {
  constructor(model, year, colour){ //properties
    this.model = model;
    this.year = year;
    this.colour = colour;
  }

  drive(){ // method
    console.log(`You drive ${this.model}`);
  }
}

const car1 = new Car("Proton", 2000, "Blue");
const car2 = new Car("BMW", 1999, "Black");
const car3 = new Car("Merc", 1997, "White");

const cars = [car1, car2, car3]; // array of object

// console.log(cars); // print the array of object

// // print property of object from the array
// console.log(cars[0].year);   // 2000
// console.log(cars[2].colour); // White
// console.log(cars[1].model);  // BMW

console.log(race(cars)) // invoke and print race function with object array ('cars' array) as argument

function race(array){
  for(const elment of array){
    elment.drive(); // invoke method from the Car class
  }
}