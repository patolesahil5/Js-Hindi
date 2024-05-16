// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// console.log(undefined>=0);

/* 
Equality and comparisons work differently
Comparison always convert null into a number 
so, 
1. (null>0) => (0>0) => false
2. (null>=0) => (0>=0) => true
*/

// === Strict Check - doesnt converts into number

// console.log("2"===2);