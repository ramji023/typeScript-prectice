let strArray = ['ram', 'bob', 'zes', 'alex']

// let numArray = [12, 23, 45, 6, 67]

// let boolArray = [true, false, true, true]

// let mixArray = ['ram', 12, true, 45, 'beta', false, true]

// strArray[2]='234'
// strArray[2]=234


// mixArray[0]='alex carry'
// mixArray[2]=true
// mixArray[4]=453
// console.log(mixArray)

// let test: (number | boolean | string)[] = []
// let usernames: string[] = [];

// usernames.push("david")
// usernames.push(true);

// test.push(23);
// test.push('bob')
// test.push(true)


// <--------------  tuples  -------------------->

// let myTuple: [number, string, boolean] = [12, 'ram', true];
// console.log(myTuple[0])
// myTuple.push(34);
// myTuple[0] = "david";
// myTuple[0] = 23;


// <---------------    Objects  --------------->
// let myObj: object
// myObj = []
// console.log(myObj);
// myObj = strArray
// console.log(myObj);
// myObj = {}
// console.log(myObj);



// const exampleObject = {
//     name: "ram ji  mishra",
//     age: 24,
//     isActive: true
// }

// console.log(typeof exampleObject)
// exampleObject.age = '24';


// type Student = {
//     name: string,
//     age: number,
//     subject: string[],
//     isActive?: boolean,
// }

// let firstStudent: Student = {
//     name: "Dave gray",
//     age: 45,
//     subject: ['operating system', 'DataTransfer', 'Machine Learning']
// }

// let secondStudent: Student = {
//     name: "Alex carry",
//     age: 35,
//     subject: ['English', 'DataTransfer', 'Machine Learning'],
//     isActive: true,
// }

// firstStudent = secondStudent


// const studentName = {
//     name: "ram Ji Mishra",
//     age: 34,
//     subject: ['maths']
// }
// const displayStudentName = (student: Student):string => {  // pass object as a parameter
//     return `hello, Mr. ${student.name}`
// }
// console.log(displayStudentName(studentName));


//  <----------   enums   ------------------>
enum Grade {
    A = 1,
    B,
    C,
    D,
    E
}
console.log(Grade.D)

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

console.log(Direction.Up);  
console.log(Direction.Left); 
