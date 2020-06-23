const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const pepsiArray = ['brown', true, 40];
const pepsiTuple: [string, boolean, number] = ['brown', true, 40];

// Can also be done as a "type alias"
// not an array--> defines the tuple!
type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 39];
const tea: Drink = ['brown', false, 15];
