// Lots of redundancy!
const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);

// Let's improve by using an Interface
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}
const listVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary);
};

const newCivic = {
  name: 'Civic',
  year: new Date(),
  broken: false,
  summary(): string {
    return `name is ${this.name}`;
  }
};

listVehicle(newCivic);

// Refactoring
// Q: But what happens to all the type checking for the vehicles?
// Q: Can we have optional, but defined, variables in the Interface?

interface Reportable {
  summary(): string;
}

const car1 = {
  prop1: 'vw',
  prop2: 2001,
  prop3: true,
  summary(): string {
    return `This ${this.prop1} is awesome.`;
  }
};
const drink1 = {
  prop1: 'brown',
  prop2: 30,
  summary(): string {
    return `This ${this.prop1} drink is so good.`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(car1);
printSummary(drink1);
