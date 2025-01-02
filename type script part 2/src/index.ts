// console.log("new course to learn type script");
// console.log("Good morning ");

// document.body.style.background = 'red'

// class User {
//     email:string;
//     password:string;
//     private subject : string="";
//     constructor(email:string,password:string){
//         this.email = email;
//         this.password = password;
//     }
// }


class User {
    private readonly subject: string = "Computer Networks";
    constructor(
        public email: string,
        public password: string,
        private userId: number,
    ) { }

    get studentEmail(): string {
        return `the email is ${this.email}`
    }
    set setId(id: number){
        if (id <= 0) {
            this.userId = 123;
        }
    }
}
let newStudent = new User("ram@gmail.com", "1234", 12)
// newStudent.subject = "Computer network" 