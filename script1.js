// Class design pattern

// pattern that are useful to create new items in code

// the prototype class pattern allows us to define a blueprint for a specific
//          type of item, and then reuse it by creating a new object from that class.

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

const civic = new Car(4, "V6", "grey");
const nx = new Car(4, "v4", "black");

console.log(civic);
console.log(nx);
