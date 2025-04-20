// problem - 1
function wrapInArray<T>(value: T): Array<T> {
    return [value]
}

console.log(wrapInArray(5))
console.log(wrapInArray("Ram Ji Mishra"))
console.log(wrapInArray([12, 23, 34, 45, 56]))

//problem - 2

interface myBox<T> {
    value: T
}

const numberBox: myBox<number> = { value: 1 };
const stringBox: myBox<string> = { value: "true" };
const boolBox: myBox<boolean> = { value: false };

