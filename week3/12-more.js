"use strict";

const o1 = { foo: 'bar' };
const o2 = { foo: 'bar' };
const o3 = o2;

console.log('o1', o1, 'o2', o2, 'o3', o3);

o1.foo = 'baz';
console.log('o1', o1, 'o2', o2, 'o3', o3);

o2.foo = 'hyf';
console.log('o1', o1, 'o2', o2, 'o3', o3);
/* o1 and o3 are independent objects,
so changing one of them doesn't affect the other.
while o2 and o3 are point to the same object (cause of o3 = o2)
so any change in this object will affect both of them.
*/
