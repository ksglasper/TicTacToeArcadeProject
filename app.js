const gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }


classArrayLike = document.getElementsByClassName("gameTile");

const gameTile = Array.from(classArrayLike);

const gameArea = document.getElementById("gameBoard");
gameArea.addEventListener("click", function (clickEvent) {
    let turnCounter = 0
  if (clickEvent.target.matches(".gameTile")) {
    // we hit a mole!
    let currentPlayer = "o"
    clickEvent.target.classList.toggle(currentPlayer);
    console.log('here I am')
}
});


//Code for checking if the game has been won



//Code for 

// function moleTimer () {
//     const randomHoleIndex = Math.floor(Math.random() * gameTile.length);

//     gameTile[randomHoleIndex].classList.toggle("x");
//   }
  
//   let myInterval = setInterval(moleTimer, 1000 );