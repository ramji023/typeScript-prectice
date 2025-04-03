// <--------- type assertions  ------------->
type One = string;
type Two = string | number;

let a = "Ram Ji Mishra"
let b = a as One;


let c = <One>"Name"
let d = <number | string>23;


// the DOM property

// let img = document.querySelector('img')!

// let myImage = document.getElementById('#img') as HTMLImageElement

// let nextImage = <HTMLImageElement>document.getElementById('#nextImg')

// console.log(img.src)
// console.log(myImage.src)
// console.log(nextImage.src)



// enter the year in html page
let parahraph = document.querySelector('p') as HTMLParagraphElement;
console.log(parahraph?.innerText)

const day: unknown = new Date().getFullYear()
console.log(day)

let spanElemnet = document.getElementById('year') as HTMLSpanElement
spanElemnet.innerText = day as string;