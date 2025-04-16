const accountId = 144553
let accountEmail = "Hemant@google.com"
var accountPassword = "12345"
accountCity = "Pali"
let accountState;

// accountId = 2 // Not allowed

accountEmail = "payasi@google.com"
accountPassword = "11111"
accountCity = "Bhopal"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])