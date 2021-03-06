// Currency Converter App
// Objectives:

// create and use variables
// create and use functions


// HTF

// Find the exchange rate between dollars and pounds
// Store the exchange rate in a variable
console.log("----------")
console.log("working with currency")
console.log("----------")
// Converting dollars to pounds:

// Store a dollar amount into a variable.
// Convert it to pounds and output "$NN is Â£NN".
// Converting pounds to dollars:

// Now store a pound amount into a variable.
// Convert it to dollar and output "Â£NN is $NN."
// Cleaning it up:

// Can you make sure the output is only 2 decimal places?
// Refactoring

// Can you refactor the code so that it uses functions? Write a function dollarsToPounds that takes a dollar number as input and outputs a string of what the pound equivalent is.
// Do the same for poundsToDollars

function dollarsToPounds(dollars){
  return ("£"+dollars * 0.63).toFixed(2)
}
function poundsToDollars(pounds){
  return ("$"+pounds / 0.63).toFixed(2)
}

console.log( dollarsToPounds(1.54) )
console.log( poundsToDollars(3.76) )


