// var vs let vs const 
// 1. scope

// {
// const a = 10;
// console.log(a);
// }

// 2. shadowing

// var x = 9;
// {
//     const x = 10;
//     console.group(x);
// }
// 3. Declaration
// var a = 12;
// var x;
// x = 10;

// let w = 13;
// let c;
// c = 40;

// const q = 12;
// q = 20;

// 4. Hoisting

console.log(a);

var a = 10;

console.log(x);
console.log(z);

let x = 90;
const z = 100;
