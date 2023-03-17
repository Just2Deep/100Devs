// *Variables*
// Create a variable and console log the value

let varName = "Hello";
console.log(varName);

// Create a variable, add 10 to it, and alert the value
let varToAdd = 5;

varToAdd += 5;
alert(varToAdd);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFour(a,b,c,d) {
    alert( a - b - c - d)
}

subFour(1,2,3,4);

// Create a function that divides one number by another and returns the remainder
let div = (a,b) => a%b

console.log(`div value: ${div(7, 5)}`)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNumbers( a, b ){
    if (a+b > 50) {
        alert('Jumanji')
    }
}
addTwoNumbers(30, 25)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multThreeNumbers(a,b,c){
    let prod = a * b * c

    if (prod%3 === 0){
        alert('ZEBRA')
    }
}

multThreeNumbers(1,3,5)