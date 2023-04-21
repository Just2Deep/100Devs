// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let randomVar = 'peace';
randomVar = 'New Year';

console.log(randomVar.toUpperCase())

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let newVar = 'something';
// alert(newVar.slice(newVar.length - 3, newVar.length))
alert(newVar.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function subNumber(n1, n2, n3, n4, n5) {
    let res = 100 - ( n1 + n2 + n3 + n4 + n5)

    // console.log(res)

    alert( Math.abs(res))
}

subNumber(3, 12, 45, 1, 10)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function sampleNumbers(a, b, c){
    const max = Math.max(a, b, c) 
    const min = Math.min(a, b, c)

    console.log(` The lowest number is ${min} and the highest number is ${max}`)
    // console.log( max(a, b, c) )
}

sampleNumbers(7, -7, 3)


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headsTails() {
    const result = Math.random()
    // console.log(result)
    if (result > 0.5){
        return 'tails'
    }
    return 'heads'
}


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function looper(number) {
    for (let i = 0; i < number; i++) {
        console.log(headsTails())
    }
}

looper(10)