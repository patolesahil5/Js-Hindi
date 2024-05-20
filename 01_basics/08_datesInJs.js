// Dates

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(typeof(myDate));

// let myCreatedDate = new Date("01-17-2023");
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.getTime());

// let myTimeStamp = Date.now();
// let myTimeStamp = Date.now();
// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday: "long"
});

console.log(newDate);