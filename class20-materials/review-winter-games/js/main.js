//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function returnEvenNumbers(arr){
    const newArr = [];

    for (let num of arr){
        if (num % 2 === 0){
            newArr.push(num)
        }
    }

    return newArr
}

console.log(returnEvenNumbers([1,2,3,4,5,6,7,8,9,10]));
// const app = []

// let data = [1,2,3,4,5,6,7,8,9,10].map( num => {
//     if (num % 2 === 0){
//         app.push(num)
//         // console.log(num)
//     } });

// console.log(app);