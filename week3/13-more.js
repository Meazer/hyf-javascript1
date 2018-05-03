"use strict";

const bar = 42;
const result = typeof typeof bar;
console.log(result);
/* First I thought result is function cause I thought typeof is function.
but actually it's a string cause (typeof bar) will return a sting 
 */
