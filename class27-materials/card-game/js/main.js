let deckId = ''


fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data)
        deckId = data.deck_id;
        console.log(deckId)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
  // const choice = document.querySelector('input').value.toLocaleLowerCase()
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let player1 = data.cards[0]
        let player2 = data.cards[1]

        document.querySelector('#player1').src = player1.image;
        document.querySelector('#player2').src = player2.image;

        let player1Val = convertToNum(player1.value);
        let player2Val = convertToNum(player2.value);

        if ( player1Val > player2Val) {
          document.querySelector('h3').innerText = 'Player 1 Wins'
        }else if ( player1Val < player2Val) {
          document.querySelector('h3').innerText = 'Player 2 Wins'
        } else {
          document.querySelector('h3').innerText = 'Time for War!!!'
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function convertToNum( val ){
  if (val === 'ACE') {
    return 14
  }else if (val === 'KING') {
    return 13
  }else if (val === 'QUEEN') {
    return 12
  }else if (val === 'JACK') {
    return 11
  }else {
    return +val
  }
}
