const name1 = "ajay";

console.log(name1);

const arr = ["ajay","anoop","nilesh","sandesh"];

arr.forEach((input) => {
    console.log(input);
});

const print1 = (() => {
    console.log("this is a function");
});

print1();

// if we declare an array with 1 type it can only have 1 type
// if we declare array with different type we can have multiple types
let mixed = ["ajay",1,"nova",true];

console.log(mixed);

// objects

let person = {
    name: "ajay",
    age: 21,
};

console.log(person);

person.name = "nilesh";
console.log(person.name);

person = {
    name: "sandesh",
    age: 21
}

console.log(person);

// explicit types

let char: string = "This is a string";   //only string
let age: number = 25;    //only number i.e int and float
let isSet: boolean = true;  // only true or false

console.log(`${char} ${age} ${isSet}`);

// union type

let mix: (string | number)[] = [];

mix.push(5);
mix.push("hello");
mix.push(10);
mix.push("arrow");

console.log(mix);

// for a variable parenthesis is not required
let uid: string|number;

uid = 10;
uid = "hello";

// objects

let person1: object;   // this will work for array also because array is an object type

person1 = {name: "ajay", age:21};

// any type
// means it can be any type number string etc
// but not recomended to use

let age1: any = 25;
age1 = true;

console.log(age1);

console.log("Test");
