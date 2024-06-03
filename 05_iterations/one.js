// For loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArr = ["flash", "batman", "superman"];

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

// break and continue

// for (let i = 0; i <= 20; i++) {
//     if(i==5){
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(i);
    
// }


for (let i = 0; i <= 20; i++) {
    if(i==5){
        console.log(`detected 5`);
        continue;
    }
    console.log(i);
}