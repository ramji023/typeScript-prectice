
// in this function see num1 & num2 by default set as "any"
// function addTwo(num1,num2){
//     num1.toLowerCase()
//     return num1+num2
// }
// let result = addTwo("2",3)   
// console.log(result);


// we should use like this
function addTwo(num1: number, num2: number): number {
    // return "hello"
    return num1 + num2
}
let result = addTwo(2, 4)
console.log(result);


function convertUppercase(str: string): string {
    // return false
    // return 234
    return str.toUpperCase()
}
let getResult = convertUppercase("ramjimishra")
console.log(getResult);


function getFavoriteNumber(): number {
    // return "hello"
    return 26;
}
getFavoriteNumber()



let loginUser = (name: string, email: string, isPaid: boolean = false) => {
}
loginUser("ram", "ram@.com")



const getHello = (s: string): string => {
    return ""
    // return 45
}
getHello("hello")


// const heros = ["Thor", "Spiderman", "Ironman", "Thanos"]
const heros = [23, 3, 12, 4, 12]
heros.map((hero): string => `hero is ${hero}`)


function consoleError(errormsg: string): void {
    console.log(errormsg);
    // return errormsg;
}
function handleError(errormsg: string): never {
    throw new Error(errormsg)
}

export { }