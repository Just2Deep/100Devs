//Write your pseduo code first! 


document.querySelector('#convert').addEventListener('click', convert)

// function to 
function convert() {
    // get the Celcius value
    const celciusValue = document.querySelector('#celcius').value

    //convert it to farhenheit ( c *9 /5 + 32)
    const farhenheitValue = ((celciusValue * 9 / 5) + 32);

    // display the value
    document.querySelector('#displayF').innerText = `${farhenheitValue}`;
}


