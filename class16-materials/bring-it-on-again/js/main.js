// *Variables*
// Declare a variable, assign it a value, and alert the value
let valueVariable = 10;
alert(valueVariable);

// Create a variable, divide it by 10, and console log the value
let divideBy10 = 30;
console.log(divideBy10/10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiply3(n1, n2, n3) {
    alert(n1*n2*n3)
}

multiply3(4, 8, 12)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function twoNumbersAddSub(n1, n2, n3, n4) {
    console.log((n1+n2) - (n3+n4))
}

twoNumbersAddSub(1, 2, 3, 5)

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNumbers(n1, n2, n3) {
    let result = 100
    result = (result + n1 - n2) / n3

    // console.log(`Three Numbers ${result}`)

    if (result > 25) {
        console.log("WE HAVE A WINNNA")
    }

}

threeNumbers(150, 5, 5)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfWeek(week) {
    week = week.toLowerCase()
    if (week == "saturday" || week == "sunday") {
        alert("Weekend")
    } else if (week == "monday" || week == "tuesday" || week == "wednesday" || week == "thursday" || week == "friday"){
        alert(" week day")
    } else {
        alert("Try Again")
    }
}

dayOfWeek("adag")

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function loopNumbers(num) {
    for (let i = 1; i <= num; i+= 3){
        console.log(i)
    }
}

loopNumbers(10)