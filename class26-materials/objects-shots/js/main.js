//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let choice = document.querySelector('input').value
  choice = choice.replace(' ' , '%20')
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + choice

  fetch(url)
    .then( res => res.json() )
    .then( data => {
        let drink = data.drinks[0] ;
        console.log(drink)

        document.querySelector('img').src = drink['strDrinkThumb'];
        document.querySelector('h2').innerText = drink['strDrink'];
        document.querySelector('h3').innerText = drink['strInstructions'];

        let drinks_check = data.drinks;

        for (let key in drinks_check){
            console.log(drinks_check[key])
        }
    })
    .catch( err => console.log( `Error ${err}`))

}