//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

const newArray = [1,2,3,5,6,9];
alert( newArray.reduce( (sum, val) => sum += val, 0) )

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const array2 = [1, 2, 3, 4, 5, 6];
const square = array => array.map( a => a * a)

console.log(square(array2))

//Create a function that takes string
//Print the reverse of that string to the console
let str = 'AString'

function reverse( str ) {
    let arr = str.split('').reverse()

    return arr.join('')
}

console.log( reverse(str) )
//Create a function that takes in a string
//Alert if the string is a palindrome or not
let pal = 'malayalam'

function palindrome( string ) {

    if (reverse(string) === string ){
        return true
    } 
    return false
}

console.log(palindrome(pal))