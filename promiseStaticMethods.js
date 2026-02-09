// 1. Promise.all
// 2. Promise.allSettled
// 3. Promise.race
// 4. Promise.any

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //  reject("Promise 1 rejected");
        resolve('Promise 1 resolved');
    }, 100)
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Promise 2 resolved');
        reject("Promise 2 rejected");
    }, 200)
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject('Promise 3 resolved');
        resolve('Promise 3 resolved');
    }, 300)
});

// Promise.all([promise1, promise2, promise3]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// Promise.allSettled([promise1, promise2, promise3]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// Promise.race([promise1, promise2, promise3]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

Promise.any([promise1, promise2, promise3]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});