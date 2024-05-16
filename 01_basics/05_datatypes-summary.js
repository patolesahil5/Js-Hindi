// Primitive Datatype
/*
String, Number, Boolean, Null, Undefined, Symbol, BigInt
*/

// Javascript is a statically typed of dynamically typed?

//Symbol example
// const id = Symbol('123')
// const anotherId = Symbol('123')

//Strict check 
// console.log(id===anotherId);

//Bigint example
// const bigNumber = 180923809480912830984091820938409n;
// console.log(bigNumber);

// Non-Primitive/Reference Datatype
/*
Array, Objects, Functions
*/

//Array
// const heroes = ["Shaktiman","nagraj","doga"];

// //Object - key value pair
// let myObj = {
//     name: "Sahil",
//     age: 24,
//     gender: "male"
// }

// // console.log(myObj);

// //Function
// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof myFunction); 

//***********************Stack, Heap Memory***************** */

//Stack => Primitive datatype
//Heap => Non Primitive

// let myYoutubeName ="Sahil"
// let anotherName = myYoutubeName;
// anotherName = "Sahil123"
// console.log(anotherName);
// console.log(myYoutubeName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email="notUser@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);