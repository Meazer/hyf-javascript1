"use strict";
let name = "Meazer";
let age = 33;
let fruits = ["banana", "apple", "kiwi"];
let animals = ["dog", "cat", "bird"];
let yearOfBirth = 1984;
console.log("The value of my variable name is: " + name);
console.log("The value of my variable age is: " + age);
console.log("The value of my variable fruits is: " + fruits);
console.log("The value of my variable Animals is: " + animals);
console.log("The value of my variable yearOfBirth is: " + yearOfBirth);
console.log("********************* Types ***************************");
console.log("The type of my variable name is: String");
console.log("The type of my variable age is: Number");
console.log("The type of my variable fruits is: Array");
console.log("The type of my variable Animals is: Array");
console.log("The type of my variable yearOfBirth is: Number");
console.log("********************* Actual Types ************************");
console.log("The actual type of my variable name is: " + typeof(name));
console.log("The actual of my variable age is: " + typeof(age));
console.log("The actual of my variable fruits is: " + typeof(fruits));
console.log("The actual of my variable Animals is: " + typeof(animals));
console.log("The actual of my variable yearOfBirth is: " + typeof(yearOfBirth));
console.log("********************* comparing ***************************");
let vars = [name, age, fruits, animals, yearOfBirth];
for (let x = 0; x < vars.length-1; x++){
    console.log("compare " + vars[x] + " type which is " + typeof(vars[x]) + " with:");
    for (let y = x+1; y < vars.length; y++){
        if (typeof(vars[x]) == typeof(vars[y])){
            console.log(vars[y] + " type which is " + typeof(vars[y]) + " --> SAME TYPE");
        } else {
            console.log(vars[y] + " type which is " + typeof(vars[y]) + " --> NOT SAME TYPE");
        }  
    } 
    console.log("----------");      
}