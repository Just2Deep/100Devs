//Create an array of movie titles. Loop through the array and each element to the h2.
const movies = ['Shrek 1', 'The Shrek 2', 'Titanic'];

movies.forEach( x => document.querySelector('h2').innerHTML += ' ' + x );

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++){
    numbers[i] += 3;
}

console.log(numbers)

//Find the average of all the numbers from question three
let result = 0
// for (let i = 0; i < numbers.length; i++){
//     result += numbers[i]
// }
numbers.forEach( (item, idx) => {
    result += item
})
console.log( result / numbers.length);