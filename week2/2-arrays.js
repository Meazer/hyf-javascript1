"use strict";

const favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");
console.log("The new value of the array is : [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]");
console.log(favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);

let index = favoriteAnimals.indexOf("giraffe");
favoriteAnimals.splice(index, 1);
console.log(favoriteAnimals);

index = favoriteAnimals.indexOf("meerkat");
favoriteAnimals.splice(index, 1);
console.log("The item you are looking for is at index: " + index);
console.log(favoriteAnimals);
