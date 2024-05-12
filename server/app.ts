interface Animal {
    run(): void;
}

class Human implements Animal {
    private noOfLegs: number;
    private noOfHands: number;

    public constructor(noOfLegs: number, noOfHands: number) {
        this.noOfLegs = noOfLegs;
        this.noOfHands = noOfHands;
    }

    public getNoOfLegs(): number {
        return this.noOfLegs;
    }

    public getNoOfHands(): number {
        return this.noOfHands;
    }

    public setNoOfLegs(noOfLegs: number): void {
        this.noOfLegs = noOfLegs;
    }

    public setNoOfHands(noOfHands: number): void {
        this.noOfHands = noOfHands;
    }

    public run(): void {
        console.log("Human is Running..")
    }
}

class Employee extends Human {

    private empCode: number;
    private empName: string;

    public constructor(noOfLegs: number, noOfHands: number, empCode: number, name: string) {
        super(noOfLegs, noOfHands);
        this.empCode = empCode;
        this.empName = name;
    }

    public getEmpCode(): number{
        return this.empCode;
    }

    public getEmpName(): string{
        return this.empName;
    }

    public setEmpCode(empCode: number): void{
        this.empCode = empCode;
    }

    public setEmpName(empName: string): void {
        this.empName = empName;
    }

    public run(): void {
        console.log("Employee is Running..")
    }
}

let emp = new Employee(2, 2,100, "Steve");
console.log(emp.getEmpCode());
console.log(emp.getEmpName());
emp.setEmpCode(101);
emp.setEmpName("Steve-2");
console.log(emp.getEmpCode());
console.log(emp.getEmpName());
emp.setNoOfHands(2);
emp.setNoOfLegs(2);
console.log(emp.getNoOfHands());
console.log(emp.getNoOfLegs());
emp.run();