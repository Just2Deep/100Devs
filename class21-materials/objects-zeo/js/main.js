//Create a stopwatch object that has four properties and three methods

const stopWatch = {};

stopWatch.currentTime = 12;
stopWatch.startTime = 0;
stopWatch.color = 'black';
stopWatch.brand = 'samsung';
stopWatch.shape = 'roundedSquare'

stopWatch.showTime = function(time) {
    console.log(`The current time is ${time}`)
}

stopWatch.sayBrand = function() {
    console.log( stopWatch.brand )
}

stopWatch.start = function() {
    console.log( 'STARTINGGGG!' )
}