//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

const arr = [ 1, 3, 4, 6, 8];

alert( arr.reduce( (sum, num) => sum + num, 0) )

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function returnSquare(arr) {

    return arr.map(a => a * a)
}

console.log(returnSquare(arr))


//Create a function that takes string
//Print the reverse of that string to the console

function reverseString( str ) {
    let array = str.split('');

    let new_value = array.reverse();
    return new_value.join("")
}

console.log(reverseString('Apple'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function checkPalindrome( string ) {

    if ( string === reverseString(string) ){
        return true
    } 
    return false
}

console.log(checkPalindrome('malayalam'));