function SetUsername(username){
    //Complex DB Calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email;
    this.password = password;
}

const chai = new createUser("sahil", "patolesahil5@gmail.com", "123");
console.log(chai);