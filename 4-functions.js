// Function Declaration and Invocation

function add(a, b) {
    return a + b;
}
let res = add(10, 12)
// console.log(add(2, 3), res);

// Scope

// function multiple(a) {
//     let b = 10;
//     return a * b;
// }


// Function Expression

const multi = function() {
    console.log('this is function expression')
}

// console.log(multi())
// Arrow Function (ES6+)

const sum = (a, b) => {
    // console.log(a+b);
}

// sum(10, 30)
// Immediately Invoked Function Expressions (IIFE):

const result = (function(a, b) {
    return a + b
})(100, 200);

// console.log(result);

// Async Functions

async function getData() {
    let res = await fetch('google.com');

    console.log(res);

}