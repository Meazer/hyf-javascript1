"use strict";

function advertisement(vehicleNames) {

    let result = "Amazing Joe's Garage, we service ";
    const plurals = vehicleNames.map(name => name + "s");

    for (let i = 0; i < plurals.length - 1; i++) {

        result += plurals[i];
        result += (i < plurals.length - 2) ? ", " : " and ";

    }

    result += plurals[plurals.length - 1] + ".";
    return result;
}

const vehicles = ["car", "motorbike", "caravan", "bike", "truck"];

const text = advertisement(vehicles);
console.log(text);
