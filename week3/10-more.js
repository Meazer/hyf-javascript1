"user strict";

const myObject = {}; // empty object!
console.log(typeof (myObject));

const teachers = [
    {
        firstName: "Maartje",
        lastName: "Kruijt"
    },
    {
        firstName: "Philipp",
        lastName: "Beau"
    },
    {
        firstName: "Ariadne",
        lastName: "Gomes"
    },
    {
        firstName: "Unmesh",
        lastName: "Joshi"
    },
    {
        firstName: "Jim",
        lastName: "Cramer"
    },
    {
        firstName: "Rohan",
        lastName: "Nicholls"
    }
];

for (let i = 0; i < teachers.length; i++) {
    switch (teachers[i].firstName) {
        case "Maartje":
        case "Philipp":
        case "Ariadne":
            teachers[i].languages = ["HTML", "CSS"];
            break;
        case "Unmesh":
            teachers[i].languages = ["CLI", "git"];
            break;
        case "Jim":
        case "Rohan":
            teachers[i].languages = ["JAVASCRIPT"];
            break;
    }
}
console.log(teachers);
