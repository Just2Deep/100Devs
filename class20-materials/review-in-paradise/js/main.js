// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favFood = 'new';

favFood = 'Dosa';

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let secondChar = 'Sample';
// alert(secondChar[1])
alert( secondChar.charAt(1) );

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function divideThreeAndMultiply(n1, n2, n3) {
    alert( n1 / n2 * n3)
}
divideThreeAndMultiply(2, 4, 5)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function takeOneNumber(n) {
    // console.log(Math.pow(n, 1/3))
    console.log( Math.cbrt(n) );
}
takeOneNumber(9)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const months = ["March" , "April", "May"];
function summerMonth(month) {
    if (months.includes(month)){
        alert('YAY')
    } else {
        alert( "Booo" )
    }

}
summerMonth("April")

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipFive(n) {
    for (let i=1; i<=n; i++){
        if (i % 5 != 0){
            console.log(i)
        }
    }
}

skipFive(15)