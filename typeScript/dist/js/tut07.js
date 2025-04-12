"use strict";
// <--------------  typeScript generics  ------------------>
/*
// const stringEcho = (arg:string):string => arg;
const echo = <T>(arg: T): T => arg;

console.log(echo("Ram"));
console.log(echo(12));
console.log(echo([12, 23, 34]));


const checkNumber = <T>(arg: T): boolean => {
    return typeof arg === 'number';
}
console.log(checkNumber(12));
console.log(checkNumber("bob"));
console.log(checkNumber(true))
console.log(checkNumber([12, 45, 6]))
console.log(checkNumber({ name: "ram", age: 23 }))




// without generics
function identity(arg: any): any {
    return arg;
  }
const result = identity("hello");
// with generics
function identity_<T>(arg: T): T {
    return arg;
  }
  const result_ = identity_("hello");
*/
// generics with classes
class Box {
    constructor(val) {
        this.val = val;
    }
    getValue() {
        return this.val;
    }
}
const firstBox = new Box("hello");
console.log(firstBox.getValue());
const secondBox = new Box(23);
console.log(secondBox.getValue());
