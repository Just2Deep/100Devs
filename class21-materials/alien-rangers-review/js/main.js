//Arrays

//Create and array of tv shows. Loop through and print each show to the console

const tvShows = ['BBT', "Friends", `GOT`]

tvShows.forEach(x => console.log( x ))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const numbers = [1,2,3,4,5,6,7,8,9,10, 33, -5, -2]

const evenNumbers = nums => nums.filter(x => x % 2 === 0);
console.log( evenNumbers(numbers) )

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumOfNumbers(arr) {
    a = arr.sort( (a,b) => a - b)

    const sum = a[1] + a[a.length - 2]
    // console.log( a[1] , a[a.length - 2])

    return sum
}

alert(sumOfNumbers(numbers))