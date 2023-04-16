//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function arrayNumbers(arr) {
    let res = 1;

    for (let i=0; i< arr.length; i++){
        res *= arr[i];
    }

    return res
}

console.log(arrayNumbers([1,2,3, 4, 5]));