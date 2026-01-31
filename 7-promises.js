function getUser(callback) {
    setTimeout(() => {
        console.log("Akash");
        callback();
    }, 1000)
}
function getOrder(callback) {
    setTimeout(() => {
        console.log("order fetched");
        callback();
    }, 1000)
}
function sendEmail(callback) {
    setTimeout(() => {
        console.log("sent");
        callback();
    }, 1000)
}

getUser(() => {
    getOrder(() => {
        sendEmail(() => {

        })
    })
})


// 1. pending
// 2. fulfilled
// 3. rejected

// then catch finally

function getUser2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Akash");
            // reject("service is down")
        }, 1000)
    })
}

function getOrder2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("order fetched");
        }, 1000)
    })
}

function sendEmail2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("sent");
        }, 1000)
    })
}

getUser2().then((res) => {
    console.log(res);
    return getOrder2();
}).then((order) => {
    console.log(order);
    return sendEmail2();
}).then((email) => {
    console.log(email);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("done");
})



