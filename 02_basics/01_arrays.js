const myArr = [0, 1, 2, 3, 4, 5]
// const myHeroes = ["Shaktiman", "naagin"];

// const myArr2 = new Array(1,2,3,4);
// // console.log(myArr[1]);  

// //Array methods
// //Adds the value at the last of the array.
// myArr.push(6);

// //Removes the last element from the array.
// myArr.pop();

// //Adds the value at the start of the array.
// myArr.unshift(9);

// //Removes the value from the start of the array.
// myArr.shift(9);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

//converts the values into string
// const newArr = myArr.join();

// //Output
// console.log(myArr);
// console.log(typeof newArr);

//Slice, Splice

// console.log("A", myArr);

//Slice only prints the provided range without printing the outer range
// const myn1 = myArr.slice(1,3);
// console.log("B", myArr);
// console.log(myn1);

// //Splice removes the range from the array
// const myn2 = myArr.splice(1,3);
// console.log("C", myArr);
// console.log(myn2);

const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel_heroes.push(dc);

// console.log(marvel_heroes[3]);

// const allHeroes = marvel_heroes.concat(dc)
// console.log(allHeroes);

// const allNewHeroes = [...marvel_heroes, ...dc]

// console.log(allNewHeroes);

// const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const realAnotherArr = anotherArr.flat(Infinity);

// console.log(realAnotherArr);

// console.log(Array.isArray("Sahil"));
// console.log(Array.from({name: "Sahil"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));