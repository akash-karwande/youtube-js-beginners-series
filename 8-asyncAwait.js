let url = "https://dummyjson.com/users/";

async function getData(id) {
    try {
        let response = await fetch(url + id);
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// getData(1);

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Akash");
            // reject("service is down")
        }, 1000)
    })
}

function getOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("order fetched");
        }, 1000)
    })
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("sent");
        }, 1000)
    })
}

async function getAllUserData() {
    console.time("start")
    try {
        let name = await getUser();
        let order = await getOrder();
        let emailStatus = await sendEmail();
        console.log(name, order, emailStatus);
    } catch (error) {
        console.log(error);
    }
    console.timeEnd("start");
}

console.log("before calling")
getAllUserData();
console.log("after calling")

