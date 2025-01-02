// const superHeros: string[] = []
// const superPowers : number[]=[]

const superPowers: Array<number> = []
const superHeros: Array<string> = []

// we can define array type using type alieases
type User = {
    name: string;
    isActive: boolean;
}
// const getAllUsers:User[] = []
const getAllUsers: Array<User> = []
const newUser = { name: "ram ji mishra", isActive: false }
getAllUsers.push(newUser)
getAllUsers.push({ name: "ram ji mishra", isActive: false })




superPowers.push(234)
superHeros.push("Hulk")





export { }