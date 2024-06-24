class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "!23");
chai.addCourse();
// chai.logMe();

const masalaChai = new User("sahil");

masalaChai.logMe();
// console.log(chai === masalaChai);
// console.log(chai instanceof Teacher);
// console.log(Teacher instanceof User);

