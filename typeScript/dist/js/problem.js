"use strict";
//problem - 1
function capitalizeFirstLetter(str) {
    return str.length === 0 ? "" : str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("hello world"));
console.log(capitalizeFirstLetter("good Morning"));
console.log("");
// problem - 2
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("world"));
// problem -3
function isPalindrome(str) {
    return str.split('').reverse().join('') === str.split('').reverse().join('').split('').reverse().join('');
}
console.log(isPalindrome("body"));
// problem - 4
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz(15);
// problem -5
function findMax(arr) {
    if (arr.length === 0)
        return null;
    let maxNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}
// problem -6 
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));
//problem -7
function countVowels(str) {
    return str.split('').reduce((sum, letter) => {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U') {
            return sum + 1;
        }
        return sum;
    }, 0);
}
console.log(countVowels("mango"));
const firstUser = {
    id: 1,
    name: "Alex carry",
    isAdmin: true
};
const secondUser = {
    id: 2,
    name: "Zasicca",
};
function printUserInfo(user) {
    console.log(`${user.id} : ${user === null || user === void 0 ? void 0 : user.isAdmin}`);
}
printUserInfo(firstUser);
printUserInfo(secondUser);
// problem - 9
function add(a, b) {
    return a + b;
}
console.log(add(23, 34));
//problem - 10
function printId(id) {
    typeof id === "number" ? console.log('id is a number') : console.log("id is a string");
}
printId(234);
printId("Ram");
// problem - 11
function identity(data) {
    return data;
}
console.log(identity(23));
console.log(identity(true));
console.log(identity("Hey"));
console.log(identity([12, 34, 4, true]));
console.log(identity({ id: 1, name: "Ram Ji Mishra", age: 24 }));
// problem - 12
const input = document.getElementById("username");
console.log(input.value);
