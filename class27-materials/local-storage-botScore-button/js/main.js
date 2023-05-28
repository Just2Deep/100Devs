//Create a button that adds 1 to a botScore stored in localStorage 

if (!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)
}
document.querySelector('p').innerText = localStorage.getItem('botScore');

document.querySelector('button').addEventListener('click', addAnothaOne)

function addAnothaOne(){
    let botScoreVal = +localStorage.getItem('botScore');
    botScoreVal += 1

    localStorage.setItem('botScore', botScoreVal)
    document.querySelector('p').innerText = localStorage.getItem('botScore');
}