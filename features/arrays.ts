const carMakers = ['ford', 'chevy', 'ram'];
const dates = [new Date(), new Date()];

// 2D array
const carsByMake = [['f150'], ['corolla']];

const carFirst = carMakers[0];
const myCar = carMakers.pop();

carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// Flexible array
const fancyDates: (Date | string)[] = [];
fancyDates.push(new Date());
fancyDates.push('today');
