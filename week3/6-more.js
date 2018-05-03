"use strict";

function vehicleType(color, code, age) {
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
    const used = (age > 1) ? "used" : "new";
    return "a " + color + " " + used + " " + vehicle;
}
console.log(vehicleType("red", 1, 1));
console.log(vehicleType("blue", 2, 2));
console.log(vehicleType("red", 3, 1));
