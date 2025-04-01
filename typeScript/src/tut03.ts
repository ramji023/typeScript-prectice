/*
// <----- type aliases  ----------->
type StringOrNumber = string | number

type StringOrNumberArray = (string|number)[]


type Student = {
    name: string,
    age: number,
    subjects: string[],
    albums: StringOrNumberArray
}

type UserRollNumber = number
type UserId = UserRollNumber
* */

/*
// <---------- literal types   ---------->
let myName : 'Ram'
myName = 'Ram'
myName = 'Dave'
* */



// <--------------  basic function ------------->

// const sum = (a: number, b: number): number => {
//     return a * b
// }

// const printMessage = (): void => {
//     console.log("Good Morning")
// }

// function printMessage(message: any): void {
//     console.log(message)
// }
// printMessage("hello world")

/**
// function type aliases
type mathFunction = (a: number, b: number) => number

const multiplication: mathFunction = function (a, b) {
    return a * b;
}

const sum: mathFunction = (a, b) => {
    return a + b;
}

printMessage(sum(2, 3))
printMessage(multiplication(2, 3))
 */


/** 
// <------ optional parameters  -------->

const sum = (a: number, b: number, c?: number): number => {
    return typeof c !== 'undefined' ? a + b + c : a + b
}
console.log(sum(2, 3, 4))
console.log(sum(2, 3))
*/


/**
// <--------   default parameters   -------->

const sum = (a: number, b: number, c: number = 1): number => {
    return a + b + c
}
console.log(sum(2, 3, 4))
console.log(sum(2, 3))
*/


// <-----    function with rest parameters    ---------->

const total = ([...nums]: number[]) => {
    return nums.reduce((prev, curr) => prev + curr, 2)
}

console.log(total([2, 4, 5]))

