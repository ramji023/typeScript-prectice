// const user = {
//     name: "ram ji mishra",
//     email: "ram@gmail.com",
//     isActive: false,
// }

// function createUser({ name: string, isActive: boolean }) { }
// const newUser = { name: "ram", isActive: true, email: "ram@23.dev" }
// createUser(newUser)




// function createCourse(): { name: string, price: number } {
//     return { name: "typeScript", price: 234 }
// }



// <----------- type aliases ------------>
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// type Mystring = string;

// function createUser(user: User): User {
//     return ({ name: "ram", email: "ram23.dev", isActive: false })
// }

// createUser({ name: "ram", email: "ram23.dev", isActive: false })




type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    mobileNumber?: number;
}

const data: User = {
    _id: "freg4f56g",
    name: "ram ji mishra",
    email: "ram@gmail.com",
    isActive: true
}

//  data._id = "vrg" //Cannot assign to '_id' because it is a read-only property
data.email = "mishra@gmail.com";
data.mobileNumber = 5252348923;







export { }