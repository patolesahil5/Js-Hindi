const accountId = 144553
let accountEmail = "patolesahil5@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2

accountEmail="hc@hc.com"
accountPassword="21222"
accountCity="Goa"

console.log(accountId);

/*
prefer not to use var because of issue in block scope 
and functional scope
*/
console.table([accountId, accountEmail, accountCity, accountPassword])

