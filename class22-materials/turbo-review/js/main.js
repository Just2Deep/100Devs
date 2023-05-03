// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = 'Apple Juice';
console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let multiWords = 'apple banana juice is very good for you';

let arrayOfWords = multiWords.split(' ');

for (let word of arrayOfWords) {
    if (word.toLowerCase() === 'apple'){
        console.log('Exists')
    }
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
    const choice = Math.ceil(Math.random() * 3)

    if ( choice === 1 ){
        return 'rock'
    } else if ( choice === 2 ) {
        return 'paper'
    } else if ( choice === 3 ) {
        return 'scissor'
    }
}

// rockPaperScissors()
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function tryRockPaperScissor(ourChoice) {
    const botChoice = rockPaperScissors()
    let flag = null;

    console.log('ourChoice', ourChoice);
    console.log('botChoice', botChoice);

    if ( ( botChoice === 'rock' && ourChoice === 'paper' ) ||
         ( botChoice === 'paper' && ourChoice === 'scissor' ) ||
         ( botChoice === 'scissor' && ourChoice === 'rock' ) ) {
        flag = 'you';
    } else if ( ( ourChoice === 'rock' && botChoice === 'paper' ) ||
                ( ourChoice === 'paper' && botChoice === 'scissor' ) ||
                ( ourChoice === 'scissor' && botChoice === 'rock' ) ) {
        flag = 'bot'
    } else {
        flag = 'draw'
    }

    return flag === 'draw' ? "It's a Draw" : flag === 'you' ? "You Win" : "Bot Wins"
}

// tryRockPaperScissor('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function ourChoicesForRPS(arr) {

    for ( let val of arr ) {
        console.log(tryRockPaperScissor(val))
    }
}

let arrayOfChoices = ['rock', 'paper', 'scissor', 'paper']
ourChoicesForRPS(arrayOfChoices)