//Global scope
var c = 300

let a = 300

if (true) {
    //blocked scope
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);



//nested scope
function one(){
    const username = "Sahil"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one();

if(true){
    const username = "Sahil"
    if(username==="Sahil"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ***************Interesting********************

console.log(addone(5));

function addone(num){
    return num + 1
}

//this is also a function but can be also called as expression.

//hoisting - if calling a function before initializing it.
addTwo(5);
const addTwo = function(num){
    return num + 2
}

