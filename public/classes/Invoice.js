// classes and acess specifiers
// public can access inside and outside the class and values can be changed
// private can access inside the class only and change value inside the class
// readonly can access inside and outside the class but cant change the value
// every object created of this class follows HasFormmater structure
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ₹${this.amount} for ${this.details}`;
    }
}
