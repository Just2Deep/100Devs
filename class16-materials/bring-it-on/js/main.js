// *Variables*
// Create a variable and console log the value
let variableName = "Hello";
console.log(variableName);

// Create a variable, add 10 to it, and alert the value
let addTen = 5;
alert(addTen + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractsAndAlert(n1, n2, n3, n4) {
    alert(n1 - n2 - n3 - n4);
}
subtractsAndAlert(1, 3, 5, 8)

// Create a function that divides one number by another and returns the remainder
function dividesOneNum(n1, n2) {
    return n1 % n2
}
console.log(dividesOneNum(11, 6))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addNumberAndAlertSum(n1, n2) {
    
    if ((n1 + n2) > 50) {
        alert('Jumanji')
    }
}
addNumberAndAlertSum(10, 49)


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function addNumberAndAlert(n1, n2, n3) {
    if ((n1*n2*n3) % 3 === 0) {
        alert('ZEBRA')
    }
}
addNumberAndAlert(1, 3, 15)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordAndNumber(num, word) {
    for (let i = 0; i< num; i++){
        console.log(word)
    }
}

wordAndNumber(3, 'Cool')