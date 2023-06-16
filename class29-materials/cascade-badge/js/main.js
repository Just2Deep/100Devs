//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

let arr = ['pikachu', 'charmander', 'bulbasaur']

function reverseList(arr) {
    arr.reverse()
    console.log(arr)
}

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [2, 3,]

const checkGreater = (arr1, arr2) => arr1.reduce( (ac, r) => r ** 2 + ac , 0) > arr2.reduce((ac, r) => r ** 3 + ac, 0)

console.log(checkGreater(arr1, arr2))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

let newArr = [68, -1, 1, -7, 10, 10]

function multipleOfIndex(arr){
    return arr.filter((a, i) => a % i == 0)
}
console.log(multipleOfIndex(newArr))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

let nums = ['1', 2, '3', 4, '5', ]

const getSumOfNumbers = function(nums) {
    return nums.reduce( (a, r) => +r + a, 0)
}

console.log( getSumOfNumbers(nums))