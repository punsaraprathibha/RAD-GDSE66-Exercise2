// function greet (name: string): string {
//     return `Hello ${name}`;
// }
// console.log(greet("Javascript"));

interface Animal {
    run(): void;
}
class Human implements Animal {

    private noOfLegs: number;
    private noOfHands: number;

    constructor(noOfLegs: number, noOfHands: number) {
        this.noOfLegs = noOfLegs;
        this.noOfHands = noOfHands;
    }

    public setNoOfLegs(noOfLegs: number) {
        this.noOfLegs = noOfLegs;
    }

    public getNoOfLegs(): number{
        return this.noOfLegs;
    }
    run(): void {
        console.log("Human is Running..");
    }
}

class Employee extends Human {

}

let human = new Human(2, 2);
console.log(human.getNoOfLegs());
human.run();

