//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    document.querySelector('#placeToSee').innerText = "YOU HAVE CLASS"
  }else if( day === "saturday" || day === "sunday"){
    document.querySelector('#placeToSee').innerText = "It's The Weekend"
  }else if( day === "wednesday" ){
    document.querySelector('#placeToSee').innerText = "It's hump day"
  }else{
    document.querySelector('#placeToSee').innerText = "BORING"

  }

}
