//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const API_KEY = 'hB5SVPsqbybchMb7MHX7cvqHgiwTYg3viBCs5ZYa';


document.querySelector('button').addEventListener('click', getNasaImg)

// console.log(document.querySelector('input').value)

function getNasaImg() {
let mydate= document.querySelector('input').value;
fetch(`${url}${API_KEY}&date=${mydate}`)
    .then( res => res.json() )
    .then( data => {
        if (data.media_type == 'image'){
        document.querySelector('img').src = data.url;
    } else if (data.media_type == 'video'){
        document.querySelector('iframe').src = data.url;
        // document.getElementById('img').style.height = 0;
        // document.getElementById('img').style.width = 0;

        }
        // console.log(data);
        document.querySelector('h2').innerText = data.title;
        document.querySelector('h3').innerText = data.explanation;
    })
    .catch( err => console.log(err))
}