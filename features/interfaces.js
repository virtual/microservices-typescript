// Lots of redundancy!
var oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true
};
var printVehicle = function (vehicle) {
    console.log("Name: " + vehicle.name);
    console.log("Year: " + vehicle.year);
    console.log("Broken: " + vehicle.broken);
};
printVehicle(oldCivic);
var listVehicle = function (vehicle) {
    console.log(vehicle.summary);
};
var newCivic = {
    name: 'Civic',
    year: new Date(),
    broken: false,
    summary: function () {
        return "name is " + this.name;
    }
};
listVehicle(newCivic);
var car1 = {
    prop1: 'vw',
    prop2: 2001,
    prop3: true,
    summary: function () {
        return "This " + this.prop1 + " is awesome.";
    }
};
var drink1 = {
    prop1: 'brown',
    prop2: 30,
    summary: function () {
        return "This " + this.prop1 + " drink is so good.";
    }
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(car1);
printSummary(drink1);
