// classes in typeScript
class Coder {
    public readonly myName: string;
    public department: string;
    public age: number;
    private salary: number;
    protected techStack: string;

    constructor(myName: string, department: string, age: number, salary: number, techStack: string) {
        this.myName = myName;
        this.department = department;
        this.age = age;
        this.salary = salary;
        this.techStack = techStack;
    }

    greet() {
        return `hello, Mr. Coder ${this.myName}`
    }
}

const coder = new Coder('Ram Ji', 'Web dev', 23, 25000, 'JavaScript')

console.log(coder.greet());
// console.log(coder.salary)  
// console.log(coder.techStack)
console.log(coder.department)



class WebDev extends Coder {
    private userName: string;

    constructor(myName: string, department: string, age: number, salary: number, techStack: string, userName: string) {
        super(myName, department, age, salary, techStack);
        this.userName = userName;
    }
    displayData() {
        return `hello, ${this.userName}. You are working with ${this.techStack}`
    }
}
const webCoder = new WebDev("Dave Gray", "Web dev", 45, 34000, "typeScript", "Zassica")
console.log(webCoder.displayData())



class Count {
    static count: number = 0;

    static getCount(): string {
        return `Count : ${++Count.count}`
    }
}

console.log(Count.getCount());
console.log(Count.count);


interface Drivable {
    speed: number;
    drive(): void;
}

class Car implements Drivable {
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    drive(): void {
        console.log(`Driving at ${this.speed} km/h`);
    }
}

let myCar = new Car(80);
myCar.drive();






class Bands {
    private dataState: string[];

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string) {
        this.dataState.push(value);
    }
}

const x = new Bands();
console.log(x.data);
x.data = "dave"
x.data = "bob"
x.data = "ram"
console.log(x.data);






