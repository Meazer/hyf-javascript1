"use strict";

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log("The string length is " + myString.length);
myString = myString.replace(/,/g, " ");
console.log(myString);
