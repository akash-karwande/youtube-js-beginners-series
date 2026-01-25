let age = 20;

if (age > 18) {
    console.log('can vote')
} else {
    console.log('not allowed to vote')
}

let marks = 81;

if (marks >= 90) {
    console.log('A+');
} else if (marks >= 80) {
    console.log('A')
} else {
    console.log('B');
}

let fruit = 'apple';

switch (fruit) {
    case 'apple':
        console.log('correct guess');
        break;

    case 'banana':
        console.log('wrong, try again');
        break;

    default:
        console.log('default block');
        break;
}

let num = 10;

num > 18 ? console.log('adult') : console.log('child')