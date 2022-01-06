import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
let docOne;
let docTwo;
// since docOne and docTwo implements HasFormater it can be Payments or Invoice 
docOne = new Invoice("Nova", "web Work", 25000);
docTwo = new Payment("anoop", "app Work", 22000);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
// advantage of interface is we can have multiple different objects of type IsPerson
const me = {
    name: "Ajay",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    }
};
console.log(me);
let someone;
const greetPerson = (person) => {
    console.log(`Hello ${person.name}`);
};
greetPerson(me);
// practice code
const invOne = new Invoice("Ajay", "building the website", 45000);
const invTwo = new Invoice("Anoop", "Building an app", 50000);
console.log(invOne);
console.log(invTwo);
// can only add type of Invoice in the array
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client);
});
// Generics allows to create reusable blocks of code that can be used with different types
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid }); // return a new obj along with the original obj with uid added to it
};
let docIdOne = addUID({ name: "Ajay", age: 40 });
// let docIdTwo = addUID("hello");  // only allows object
console.log(docIdOne.name);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["SHOPPING"] = 1] = "SHOPPING";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docIdThree = {
    uid: 1,
    resourceName: "Person",
    resourceType: ResourceType.PERSON,
    data: "Nilesh"
};
const docIDFour = {
    uid: 2,
    resourceName: "ShoppingList",
    resourceType: ResourceType.SHOPPING,
    data: ["milk", "bread", "eggs"]
};
console.log(docIdThree);
console.log(docIDFour);
// tuples
// types of data in each position if fixed once initilized
let tup = ["anoop", 25, true];
// tup[0] = false  // not allowed
tup[0] = "sandesh"; //allowed
// use case of tuple
let student;
student = ["name", 101];
// main project starts from here
// // type script knows what form we are grabing if we use form tag directly
// const form = document.querySelector("form")!;
// here when we use .class name type script recognigises it as an element
// so we can use typecasting to tell what type
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values; // tuples
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Invoice(...values);
    }
    else {
        // doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Payment(...values);
    }
    // console.log(doc);
    list.render(doc, type.value, "end");
});
