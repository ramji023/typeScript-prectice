"use strict";
// classes in typeScript
class Coder {
    constructor(myName, department, age, salary, techStack) {
        this.myName = myName;
        this.department = department;
        this.age = age;
        this.salary = salary;
        this.techStack = techStack;
    }
    greet() {
        return `hello, Mr. Coder ${this.myName}`;
    }
}
const coder = new Coder('Ram Ji', 'Web dev', 23, 25000, 'JavaScript');
console.log(coder.greet());
// console.log(coder.salary)  
// console.log(coder.techStack)
console.log(coder.department);
class WebDev extends Coder {
    constructor(myName, department, age, salary, techStack, userName) {
        super(myName, department, age, salary, techStack);
        this.userName = userName;
    }
    displayData() {
        return `hello, ${this.userName}. You are working with ${this.techStack}`;
    }
}
const webCoder = new WebDev("Dave Gray", "Web dev", 45, 34000, "typeScript", "Zassica");
console.log(webCoder.displayData());
class Count {
    static getCount() {
        return `Count : ${++Count.count}`;
    }
}
Count.count = 0;
console.log(Count.getCount());
console.log(Count.count);
class Car {
    constructor(speed) {
        this.speed = speed;
    }
    drive() {
        console.log(`Driving at ${this.speed} km/h`);
    }
}
let myCar = new Car(80);
myCar.drive();
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        this.dataState.push(value);
    }
}
const x = new Bands();
console.log(x.data);
x.data = "dave";
x.data = "bob";
x.data = "ram";
console.log(x.data);
