//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const name = data['species']['name']
        const path = data['sprites']['other']['official-artwork']['front_default'];
        console.log(path)
        document.querySelector('img').src = path;
        document.querySelector('h2').innerText += ': ' + name;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}