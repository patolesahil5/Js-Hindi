// Object Literal - Literally a object
const user = {
    username: "Sahil",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details");
        console.log(`Username: ${this.username}`);
    }
}

// console.log(user.loginCount);
// console.log(user.getUserDetails()); 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}

const userOne = new User("Sahil", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);