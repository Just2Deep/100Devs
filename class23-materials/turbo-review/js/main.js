// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let string = 'hello, how are you?'
if (string[string.length - 1] === '?') {
    alert(string)
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let softwareEngineer = 'what is this jr. dev ? what do jr. dev do?'

console.log(softwareEngineer.replaceAll('jr. dev', 'software engineer'));


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissor() {
    let res = Math.floor( Math.random() * 3);
    // console.log( res )

    if (res === 0) {
        return 'rock'
    } else if ( res === 1 ) {
        return 'paper'
    } else if ( res === 2 ) {
        return 'scissor'
    }
}

// console.log(rockPaperScissor())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function botUserGame( userChoice ) {
    let botChoice = rockPaperScissor()

    if ( userChoice === botChoice ){
        return "It's a draw";
    } else if ( userChoice === 'rock' && botChoice === 'scissor' ||
                userChoice === 'paper' && botChoice === 'rock' ||
                userChoice === 'scissor' && botChoice === 'paper') {
        return 'You Win';
    } else {
        return 'You Lose';
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function multipleGames( arr ) {
    // console.log(arr)
    // return arr.forEach( choice => botUserGame( choice ))

    for (let choice of arr) {
        console.log( botUserGame(choice) );
    }
}

multipleGames(['rock', 'paper', 'scissor', 'paper', 'rock']);