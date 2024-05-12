"use strict";
// function greet (name: string): string {
//     return `Hello ${name}`;
// }
// console.log(greet("Javascript"));
class Human {
    constructor(noOfLegs, noOfHands) {
        this.noOfLegs = noOfLegs;
        this.noOfHands = noOfHands;
    }
    setNoOfLegs(noOfLegs) {
        this.noOfLegs = noOfLegs;
    }
    getNoOfLegs() {
        return this.noOfLegs;
    }
    run() {
        console.log("Human is Running..");
    }
}
class Employee extends Human {
}
let human = new Human(2, 2);
console.log(human.getNoOfLegs());
human.run();
