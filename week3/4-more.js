"use strict";

function vehicleType(color, code) {
    let vehicle;
    switch (code) {
        case 1:
            vehicle = "car";
            break;
        case 2:
            vehicle = "motorbike";
            break;
        default:
            return "unknown vehicle!";
    }
    return "a " + color + " " + vehicle;
}

console.log(vehicleType("red", 1));
console.log(vehicleType("blue", 2));
console.log(vehicleType("red", 3));
