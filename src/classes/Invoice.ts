import { HasFormatter } from "../interfaces/HasFormatter.js";

// classes and acess specifiers
// public can access inside and outside the class and values can be changed
// private can access inside the class only and change value inside the class
// readonly can access inside and outside the class but cant change the value
// every object created of this class follows HasFormmater structure
export class Invoice implements HasFormatter{
    readonly client: string;
    private details: string;
    public amount: number;

    constructor(client: string, details: string, amount: number){
        this.client = client;
        this.details = details;
        this.amount = amount;
    }

    format() {
        return `${this.client} owes ₹${this.amount} for ${this.details}`
    }

}

