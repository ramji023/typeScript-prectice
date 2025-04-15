
//problem - 1
function capitalizeFirstLetter(str: string): string {
    return str.length === 0 ? "" : str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalizeFirstLetter("hello world"))
console.log(capitalizeFirstLetter("good Morning"))
console.log("")


// problem - 2
function reverseString(str: string): string {
    return str.split('').reverse().join('')
}
console.log(reverseString("world"))


// problem -3
function isPalindrome(str: string): boolean {
    return str.split('').reverse().join('') === str.split('').reverse().join('').split('').reverse().join('')
}

console.log(isPalindrome("body"))

// problem - 4
function fizzBuzz(n: number): void {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i)
        }
    }
}
fizzBuzz(15)



// problem -5
function findMax(arr: number[]): number | null {
    if (arr.length === 0) return null;
    let maxNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i]
        }
    }
    return maxNumber
}


// problem -6 
function sumArray(arr: number[]): number {
    return arr.reduce((acc, num) => acc + num, 0)
}

console.log(sumArray([1, 2, 3, 4, 5]))


//problem -7
function countVowels(str: string):number {
  return  str.split('').reduce((sum, letter) => {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U') {
            return sum + 1;
        }
        return sum
    }, 0)
}
console.log(countVowels("mango"))

// problem -8 