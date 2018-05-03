"use strict";

const x = [1, 2, 3, 4, 5];
const y = [1, 2, 3, 4, 5];
const z = y;
// I thought it's TRUE because they have the same type and same value!
console.log("using Comparison operators x & y ==>", x === y, x == y);
console.log("using Comparison operators y & z ==>", z === y, z == y);
console.log("using Comparison operators x & z ==>", z === x, z == x);

function equal(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
}

console.log("using equal function x & y ==>", equal(x, y));
