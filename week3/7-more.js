"use strict";


function vehicleType(color, code, age) {
    const vehicles = ["car", "motorbike", "caravan", "bike"];
    let vehicle;
    if (0 < code && code <= vehicles.length) {
        vehicle = vehicles[code - 1];
    } else { return "unknown vehicle!"; }
    const used = (age > 1) ? "used" : "new";
    return "a " + color + " " + used + " " + vehicle;
}

console.log(vehicleType("red", 1, 1));
console.log(vehicleType("blue", 4, 2));
console.log(vehicleType("red", 3, 1));
console.log(vehicleType("black", 5, 1));
console.log(vehicleType("green", 0, 1));
