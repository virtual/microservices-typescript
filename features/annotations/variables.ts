let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// array
// string[] -> value will be an array that contains strings
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [0, 3, 7];
let truths: boolean[] = [false, true, true];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// functions
// what type of arguments will this function take?
// what is the type of the return?
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use type annotations
// 1) Function that returns the `any` type
const json = '{ "x": 10, "y": 20 }';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords);

// 2) When we declare a variable on one line
// and initialize it on another
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) When we want the variable to have a type that
// can't be inferred
let numbers = [-10, -1, 10];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
