//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data)
       document.querySelector('h1').innerHTML = data.index
       document.querySelector('h2').innerHTML = data.name
       document.querySelector('h3').innerHTML = data.classes[0].name
       document.querySelector('ul').innerHTML = ''
       
       data.subclasses.forEach(element => {
        // Create an li
        const li = document.createElement('li')
        // Add data into li
        li.textContent = element.name
        // Append the li to ul
        document.querySelector('ul').appendChild(li)
        })})
      .catch(err => {
          console.log(`error ${err}`)
      });
}
