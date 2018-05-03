"use strict";

function printObject(obj) {
    for (let pro in obj) {
        console.log(pro + " = " + obj[pro]);
    }
}

const person = {
    firstName: "Meazer",
    lastName: "Moti",
    age: 33,
    city: "Tiel",
};

printObject(person);
