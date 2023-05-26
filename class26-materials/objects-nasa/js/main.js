//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const API_KEY = '***';


document.querySelector('button').addEventListener('click', getNasaImg)

// console.log(document.querySelector('input').value)

function getNasaImg() {
let mydate= document.querySelector('input').value;
fetch(`${url}${API_KEY}&date=${mydate}`)
    .then( res => res.json() )
    .then( data => {
        let image = data['url'];
        let name = data['title'];
        let description = data['explanation'];
        console.log(data);

        document.querySelector('img').src = image;
        document.querySelector('h2').innerText = name;
        document.querySelector('h3').innerText = description;
    })
    .catch( err => console.log(err))
}