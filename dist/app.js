"use strict";
class Human {
    constructor(noOfLegs, noOfHands) {
        this.noOfLegs = noOfLegs;
        this.noOfHands = noOfHands;
    }
    getNoOfLegs() {
        return this.noOfLegs;
    }
    getNoOfHands() {
        return this.noOfHands;
    }
    setNoOfLegs(noOfLegs) {
        this.noOfLegs = noOfLegs;
    }
    setNoOfHands(noOfHands) {
        this.noOfHands = noOfHands;
    }
    run() {
        console.log("Human is Running..");
    }
}
class Employee extends Human {
    constructor(noOfLegs, noOfHands, empCode, name) {
        super(noOfLegs, noOfHands);
        this.empCode = empCode;
        this.empName = name;
    }
    getEmpCode() {
        return this.empCode;
    }
    getEmpName() {
        return this.empName;
    }
    setEmpCode(empCode) {
        this.empCode = empCode;
    }
    setEmpName(empName) {
        this.empName = empName;
    }
    run() {
        console.log("Employee is Running..");
    }
}
let emp = new Employee(2, 2, 100, "Steve");
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
