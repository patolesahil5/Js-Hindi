class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const Sahil = new User("Sahil");

// console.log(Sahil.createId());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("Iphone", "I@phone.com");
// console.log(iphone.createId());