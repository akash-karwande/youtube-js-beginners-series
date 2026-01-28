// event bubbling
// document.querySelector('.child').addEventListener('click', function() {
//     console.log('child clicked');
// });

// document.querySelector('.parent').addEventListener('click', function() {
//     console.log('parent clicked');
// });

// document.querySelector('.grand-parent').addEventListener('click', function() {
//     console.log('grand-parent clicked');
// })
// event capturing or trickling

document.querySelector('.child').addEventListener('click', function() {
    console.log('child clicked');
}, true);

document.querySelector('.parent').addEventListener('click', function() {
    console.log('parent clicked');
}, true);

document.querySelector('.grand-parent').addEventListener('click', function() {
    console.log('grand-parent clicked');
}, true)