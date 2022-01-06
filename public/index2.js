"use strict";
let greet;
greet = () => {
    console.log("Hello World");
};
greet();
// here 3rd parameter c is optional not compulsory to pass
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c); // if not passed it will be undefined
};
add(10, 20);
// defining function return type number
const sub = (a, b) => {
    return a - b;
};
let minus = sub(10, 5);
console.log(minus);
const logDetails = (uid, item) => {
    console.log(`${item} has uid of ${uid}`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
// function signature
// example 1
let mul;
// the below function follows the above functions signature
mul = (c, d) => {
    console.log(c * d);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else if (action === "sub") {
        return numOne - numTwo;
    }
    else {
        return -1;
    }
};
// example 3
let logDetail;
logDetail = (nova) => {
    console.log(`${nova.name} is ${nova.age} years old`);
};
