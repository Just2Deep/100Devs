//Write your pseduo code first! 

document.querySelector('#sub').addEventListener('click', convert);

// create a function to

function convert() {
    // get the celcius value
    let temp = document.querySelector('#celcius').value

    // convert the temperature using math

    temp = (celcius * 9 / 5) + 32 ;

    // update the value in website

    document.querySelector('#displayVal').innerText  = temp;

}
