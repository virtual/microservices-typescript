// refer to as the Super Class
class Vehicle {
  // 1
  // take first argument in constructor
  // color: string = 'red'; // you should always initialize in a class
  color: string;
  // a constructor is instantly executed and uses arguments
  constructor(color: string) {
    this.color = color; // if you use a constructor, then don't define it above
  }
  // end way 1

  // way 2 -- add public, equivalent to way 1!
  // constructor(public color: string) { }
  // end way 2
  protected honk(): void {
    console.log('beep');
  }
}
// refer to as the Child Class
class CarClass extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  // copies all props from Vehicle
  // if we want to override, we can
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
const carInstance = new CarClass(3, 'red');
// carInstance.drive();
carInstance.startDrivingProcess();
// carInstance.honk();

const superVehicle = new Vehicle('red');
