let greet: Function;

greet = () => {
    console.log("Hello World");
}

greet();

// here 3rd parameter c is optional not compulsory to pass
const add = (a: number, b: number, c?: number|string)  => {
    console.log(a + b);
    console.log(c);         // if not passed it will be undefined
}

add(10,20);

// defining function return type number
const sub = (a: number, b: number): number => {
    return a - b;
}

let minus = sub(10,5);

console.log(minus);

// Type Aliases

type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum};

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has uid of ${uid}`);
}

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

// function signature

// example 1

let mul: (a: number, b: number) => void;

// the below function follows the above functions signature
mul = (c: number, d: number) => {
     console.log(c * d);
 }

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === "add"){
        return numOne + numTwo;
    } else if(action === "sub") {
        return numOne - numTwo;
    }else {
        return -1;
    }
}

// example 3

let logDetail: (obj: {name: string, age: number}) => void;

logDetail = (nova: {name: string, age: number}) => {
    console.log(`${nova.name} is ${nova.age} years old`);
}
