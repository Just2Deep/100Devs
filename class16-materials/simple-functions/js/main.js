//---Easy
//create a function that subtracts two numbers and alerts the difference

function subtractTwoNumbers(num1, num2) {
    alert(num1-num2)
}

subtractTwoNumbers(2, 5)

//create a function that divides three numbers and console logs the quotient

function dividesThreeNumbers(num1, num2, num3) {
    let quotient= num1/num2

    quotient = quotient /num3

    console.log(quotient)

}
dividesThreeNumbers(16, 32, 2)

//create a function that multiplys three numbers and returns the product
function multiplyThreeNumbers(num1, num2, num3) {

    return num1*num2*num3

}
multiplyThreeNumbers(1,2,5)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function addTwoAndDivide(num1, num2, num3) {


    return (num1 + num2) % num3
}
console.log(addTwoAndDivide(1,5,4))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function multiplyAndConditional(n1, n2, n3, n4) {
    let multiple = n1 * n2

    if (multiple > 100) {
        console.log(n3+n4)
    } else if (multiple < 100) {
        console.log(n3-n4)
    } else if (multiple === 100) {
        alert( (n1*n2*n3) % n4)
    }
}

multiplyAndConditional(1, 2,3, 10)