//singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sahil",
    [mySym]: "key1",
    age: 24,
    location: "Hyderabad",
    email: "patolesahil5@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// Object.freeze(JsUser);

JsUser.email = "new@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}

console.log(JsUser.greeting());

JsUser.greeting2 = function () {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting2());