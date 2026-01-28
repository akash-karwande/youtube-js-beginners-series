// Simple Synchronous Callback

function sayGoodBye() {
    console.log("Good bye");
}

function greet(name, callback) {
    callback();
    console.log(name)
}

greet('Akash', sayGoodBye);

 
// Asynchronous Callback

setTimeout(function(){
    console.log('log me after two second');
}, 2000)

// fetch('github.com').then((data) => {
//     console.log(data);
// })


// Callbacks in Event Listeners

let btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {
    console.log('you are cliked')
})

