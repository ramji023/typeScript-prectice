// let user: (string | number | boolean)[] = ["12", 67, 7, true, 8, false, "ram"]

let user: [string, number, boolean]
user = ["ram", 23, true]
// user = [true,23,"ram"] 

type User = [number, string]
let newUser: User = [123, "ram"]
newUser[0] = 234







export { }