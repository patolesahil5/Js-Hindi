const user = {
    username: "sahil",
    price: 200,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
    }

}

// user.welcomeMessage();
// //here context is changed.
// user.username = "Sam"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "Sahil"
//     console.log(this.username);
// }

// chai();

// conclusion - 'this' keyword only works in object and not in function.

const chai = () => {
    let username = "Sahil"
    console.log(this);
}

// chai();

//explicit return
// const addTwo = (num1, num2) => {
//     return num1+num2;
// }

//implicit return
// const addTwo = (num1, num2) => num1+num2;

const addTwo = (num1, num2) => ({username: "Sahil"});


console.log(addTwo(1,2));

const myArray = [2,3,4,5,6]