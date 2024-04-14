const accountId= 14456
let accountEmail="jaynish@google.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState

// accountId=2 //not allowed
accountEmail="hc@123.com"
accountPassword="56555"
accountCity="banglore"

console.log(accountId);

/* prefer not to use var 
because of issue in block scope and functionl scope */

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])