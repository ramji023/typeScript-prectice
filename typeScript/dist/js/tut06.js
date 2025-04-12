"use strict";
//  <----------- Typescript Index Signatures, keyof Assertions & the Record Utility Type  -------------->
// interface TransactionObj {
//     [index: string]: number,
//     pizza: number,
//     books: number,
//     job: number,
// }
const transaction = {
    pizza: -3,
    books: 23,
    job: 12,
};
console.log(transaction["books"]);
console.log(transaction.books);
let val = 'books';
console.log(transaction[val]); // this will show error
function totalNet(transactions) {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]; // this line will show error
    }
    return total;
}
console.log(totalNet(transaction));
// drawback of index signature
console.log(transaction['main']); // non-existing properties
const student = {
    name: "alex carry",
    gpa: 7.6,
    subject: "computer science",
};
// console.log(student.name);
for (const key in student) {
    console.log(`${key} : ${student[key]}`);
}
