// Defined using an arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// // Return type can be inferred
// const addAgain = (a: number, b: number) => {
//   return a + b;
// };

// // But won't throw an error if there's a return error
// const addAgainOoops = (a: number, b: number) => {
//   a + b;
// };

// // Shows an error!
// const addAgainOoopsAnno = (a: number, b: number): number => {
//   a + b;
// };

// Function defined using named function
function divide(a: number, b: number): number {
  return a / b;
}

// Anonymous function assigned to variable
const multiply = function (a: number, b: number): number {
  return a * b;
};

// No return, so uses void
const logger = (message: string): void => {
  console.log(message);
};

// If a function throws an error, it will never return something
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date, forecast.weather);
};

// Destructured version ES2015
// Replace the variable itself with the destructuring object
const logWeatherDestr = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

logWeather(todaysWeather);
