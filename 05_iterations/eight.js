const myNumbers = [1, 2, 3]

// const myTotal = myNumbers.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNumbers.reduce((acc, currval)=>acc+currval, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 8999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "py course",
        price: 3999
    }
]

const priceToPay = shoppingCart.reduce((acc, item)=>(
    acc + item.price
),0)

console.log(priceToPay);