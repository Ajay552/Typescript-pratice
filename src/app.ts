import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter";

let docOne: HasFormatter;
let docTwo: HasFormatter;
// since docOne and docTwo implements HasFormater it can be Payments or Invoice 
docOne = new Invoice("Nova","web Work",25000);
docTwo = new Payment("anoop","app Work",22000);



let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

// practice code
// interface

interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}
// advantage of interface is we can have multiple different objects of type IsPerson
const me: IsPerson = {
    name: "Ajay",
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number{
        return amount;
    }
};

console.log(me);

let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
    console.log(`Hello ${person.name}`);
}

greetPerson(me);
// practice code

const invOne = new Invoice("Ajay", "building the website", 45000);
const invTwo = new Invoice("Anoop", "Building an app", 50000);

console.log(invOne);
console.log(invTwo);

// can only add type of Invoice in the array
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
    console.log(inv.client);
})


// Generics allows to create reusable blocks of code that can be used with different types

const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid};      // return a new obj along with the original obj with uid added to it
}

let docIdOne = addUID({name: "Ajay", age: 40});
// let docIdTwo = addUID("hello");  // only allows object
console.log(docIdOne.name);


// generics with interfaces

interface Resource<T> {
    uid: number;
    resourceName: string;
    resourceType: ResourceType,
    data: T;
}

// ENUMS
enum ResourceType {BOOK, SHOPPING, FILM, DIRECTOR, PERSON }

const docIdThree: Resource<string> = {
    uid: 1,
    resourceName: "Person",
    resourceType: ResourceType.PERSON,
    data: "Nilesh"
}

const docIDFour: Resource<String[]> = {
    uid: 2,
    resourceName: "ShoppingList",
    resourceType: ResourceType.SHOPPING,
    data: ["milk","bread","eggs"]
}

console.log(docIdThree);
console.log(docIDFour);

// tuples
// types of data in each position if fixed once initilized

let tup: [string, number, boolean] = ["anoop", 25, true];
// tup[0] = false  // not allowed
tup[0] = "sandesh"  //allowed

// use case of tuple
let student: [string, number];
student = ["name",101];

// main project starts from here

// // type script knows what form we are grabing if we use form tag directly
// const form = document.querySelector("form")!;

// here when we use .class name type script recognigises it as an element
// so we can use typecasting to tell what type
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// inputs

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    let values: [string, string, number];   // tuples
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc: HasFormatter;
    if(type.value === "invoice"){
        // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Invoice(...values);
    }else{
        // doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Payment(...values);
    }

    // console.log(doc);

    list.render(doc, type.value, "end");


});


 