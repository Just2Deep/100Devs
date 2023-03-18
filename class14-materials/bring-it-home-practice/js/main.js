// *Variables*
// Create a variable and console log the value
let randomVariable = "value";
console.log(randomVariable);

// Create a variable, add 10 to it, and alert the value
let variableTwo = 5;

variableTwo += 10;
alert(variableTwo);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractsFourNumbers(num1, num2, num3, num4) {
    const diff = num1 - num2 - num3 - num4 ;
    alert(diff);
}
subtractsFourNumbers(7, 2, 9, 10)

// Create a function that divides one number by another and returns the remainder
function dividesNumbers(a, b) {
    return a % b
}

console.log(dividesNumbers( 11, 5));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function ConditionalsOne( num1, num2) {
    const sum = num1 + num2;

    if (sum > 50) {
        alert( "Jumanji" );
    }
}

ConditionalsOne(29, 43)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThreeNumbers( n1, n2, n3) {
    const prod = n1 * n2 * n3;

    if (prod % 3 === 0) {
        alert("ZEBRA");
    }
}
multiplyThreeNumbers(1, 5, 15)