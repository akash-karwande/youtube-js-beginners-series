// 1. Primitive Data types (pass/store/assigned by value)
var a = 12; // number type
var b = 'Hi' // string 
var c = true // boolean
var d = null // null
var e = undefined // undefined

// console.log(typeof c);


// 2. Non-primitive data types (pass/store/assigned by reference )
// object
var person = {
    name: 'Akash',
    age: 30,
}
var person2 = person;
person2.name = 'Deepak';
// console.log(person.name);

// array
let myArr = [1,2,3,5];
let copy = myArr;
copy[0] = 'hi';

console.log(myArr)
