const gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }


classArrayLike = document.getElementsByClassName("gameTile");

const gameGrid = Array.from(classArrayLike);
let turnCounter = 0


const gameArea = document.getElementById("gameBoard");
gameArea.addEventListener("click", function (clickEvent) {
  if (clickEvent.target.matches(".gameTile")) {
    let currentPlayer = gameState.players[turnCounter % 2]
    clickEvent.target.classList.toggle(currentPlayer);

    turnCounter++
    console.log(turnCounter)
}
});

console.log(gameGrid)

//Code for checking if the game has been won



//Code for 

// function moleTimer () {
//     const randomHoleIndex = Math.floor(Math.random() * gameTile.length);

//     gameTile[randomHoleIndex].classList.toggle("x");
//   }
  
//   let myInterval = setInterval(moleTimer, 1000 );