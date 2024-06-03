// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB connected`);
})();

// ()-> function definition
// ()-> execution call.
// to recover from the pollution caused by global scope, we use iife
// ()()
((name)=>{
    // unnamed IIFE
    console.log(`My name is ${name}`);
})('sahil');