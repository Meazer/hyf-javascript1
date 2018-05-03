"use strict";

function advertisement(vehicleNames) {
    let result = "Amazing Joe's Garage, we service ";
    for (let i = 0; i < vehicleNames.length - 1; i++) {
        result += vehicleNames[i] + "s, ";
    }
    result += "and " + vehicleNames[vehicleNames.length - 1] + "s.";
    return result;
}

const vehicles = ["car", "motorbike", "caravan", "bike"];

const text = advertisement(vehicles);
console.log(text);
