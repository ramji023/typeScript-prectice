"use strict";
let a = "Ram Ji Mishra";
let b = a;
let c = "Name";
let d = 23;
// the DOM property
// let img = document.querySelector('img')!
// let myImage = document.getElementById('#img') as HTMLImageElement
// let nextImage = <HTMLImageElement>document.getElementById('#nextImg')
// console.log(img.src)
// console.log(myImage.src)
// console.log(nextImage.src)
// enter the year in html page
let parahraph = document.querySelector('p');
console.log(parahraph === null || parahraph === void 0 ? void 0 : parahraph.innerText);
const day = new Date().getFullYear();
console.log(day);
let spanElemnet = document.getElementById('year');
spanElemnet.innerText = day;
