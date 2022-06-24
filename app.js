const gameState = {
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};

classArrayLike = document.getElementsByClassName("gameTile");

const gameGrid = Array.from(classArrayLike);
let turnCounter = 0;

const gameArea = document.getElementById("gameBoard");
gameArea.addEventListener("click", function (clickEvent) {
  if (clickEvent.target.matches(".gameTile")) {
    if (clickEvent.target.matches(".x") || clickEvent.target.matches(".o")) {
    } else {
      let currentPlayer = gameState.players[turnCounter % 2];
      console.log(
        `you just placed an ${currentPlayer} and the turn counter is ${turnCounter}!`
      );
      clickEvent.target.classList.toggle(currentPlayer);

      turnCounter++;
      console.log(turnCounter);
    }
  }
});
function updateGameBoard(num) {
  let currentPlayer = gameState.players[turnCounter % 2];
  const rowNumber = num.dataset.row;
  const columnNumber = num.dataset.column;
  gameState.board[rowNumber][columnNumber] = currentPlayer;

  console.log([rowNumber, columnNumber]);
  console.log(gameState.board);
}
const gameSettings = document.getElementById("gameSetting");
gameSettings.addEventListener("click", function (clickEvent) {
  if (clickEvent.target.matches(".boardReset")) {
    const allGameTiles = document.getElementsByClassName("gameTile");

    for (i = 0; i < allGameTiles.length; i++) {
      allGameTiles[i].classList.remove("o");
      allGameTiles[i].classList.remove("x");
    }
    for (j = 0; j < gameState.board.length; j++) {
      for (k = 0; k < gameState.board[j].length; k++) {
        gameState.board[j][k] = null;
      }
    }

    console.log(gameState.board);
  }
});

console.log(gameGrid);

//Code for checking if the game has been won
// alert(num.innerHTML + " is " + [rowNumber,columnNumber] +".");
