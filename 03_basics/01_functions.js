function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("L");
}
// function() {} -> this is scope/definition of function

//This is execution of the function
//sayMyName is just a reference
// sayMyName();

function addTwoNumbers(number1, number2){
    console.log(number1+number2);
}

function addTwoNumbers(number1, number2){
    
    // let result = number1+number2;
    // return result;
    return number1+number2
}


//numbers taken as input on creating function is called parameters
//numbers provided on calling a function is called arguments.
const result = addTwoNumbers(3, 5);
// console.log("Result :", result);

function logInUserMessage(username = "Sam"){
    if(username===undefined){
        console.log("Enter username");
        return
    }
    else
    return `${username} just logged in`
}

// console.log(logInUserMessage("Sahil"));
// console.log(logInUserMessage("Sahil"));
// console.log(logInUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    // ...num1 is a rest operator which can take multiple values and print them in the form of array.
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Sahil",
    price: 350
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject({
    username: "Sahil",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));