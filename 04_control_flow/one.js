// If Statement
// const isUserLoggedIn = true;
// const temperature = 41

// if(temperature<42){
//     console.log("less than 40");
// }
// else{
//     console.log("greater than 40");
// } 

// const score = 200;

// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


const balance = 1000;

// Implicit scope
// if(balance>500) console.log("test"), 
// console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if(balance<750){
//     console.log("less than 750");
// } else if(balance<900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userloggedIn && debitCard){
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In");
}