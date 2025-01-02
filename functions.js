"use strict";
// in this function see num1 & num2 by default set as "any"
// function addTwo(num1,num2){
//     num1.toLowerCase()
//     return num1+num2
// }
// let result = addTwo("2",3)   
// console.log(result);
Object.defineProperty(exports, "__esModule", { value: true });
// we should use like this
function addTwo(num1, num2) {
    // return "hello"
    return num1 + num2;
}
var result = addTwo(2, 4);
console.log(result);
function convertUppercase(str) {
    // return false
    // return 234
    return str.toUpperCase();
}
var getResult = convertUppercase("ramjimishra");
console.log(getResult);
function getFavoriteNumber() {
    // return "hello"
    return 26;
}
getFavoriteNumber();
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("ram", "ram@.com");
var getHello = function (s) {
    return "";
    // return 45
};
getHello("hello");
// const heros = ["Thor", "Spiderman", "Ironman", "Thanos"]
var heros = [23, 3, 12, 4, 12];
heros.map(function (hero) { return "hero is ".concat(hero); });
