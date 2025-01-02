interface User {
    readonly databaseID: number;
    name: string;
    email: string;
    googleToken?: number;
    startPremium(): string;
    getCoupon(couponName: string): number;
}

interface User {
    age: number;
}

interface Admin extends User {
    role: "Admin" | "User" | "Student"
}

let loggedinUser: User = {
    databaseID: 123, name: "ram ji mishra", email: "ram@12.com", age: 23,
    startPremium() {
        return "now user is premium state"
    },
    getCoupon(name: "ramji") {
        return 345
    },
}
loggedinUser.email = "BOB12@software.dev"
// loggedinUser.databaseID =123 

let Student: Admin = {
    role: "Admin", databaseID: 123, name: "ram ji mishra", email: "ram@12.com", age: 23,
    startPremium() {
        return "now user is premium state"
    },
    getCoupon(name: "ramji") {
        return 345
    },
}


















































export { }