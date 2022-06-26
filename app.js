const gameState = {
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};
const endResultTitle = document.getElementById("endResult");
gameGrid = document.getElementsByClassName("gameTile");
const gameArea = document.getElementById("gameBoard");
const gameSettings = document.getElementById("gameSetting");
const playerOne = document.getElementById('playerOne')
const playerTwo = document.getElementById('playerTwo')
const playerArea = document.getElementById('playerNames')

const playerOneNameSpan = document.getElementById('playerOneName')
const playerTwoNameSpan = document.getElementById('playerTwoName')
let playerOneName = ''
let playerTwoName = ''

let turnCounter = 0;
let gameMode = 0;

function nameSubmission(){
  console.log(playerOne.value)
  console.log(playerOneName)

  if(playerOne.value === ''){
  playerOneName = 'Player 1 : Computer'

  }else{
    playerOneName = `Player 1 : ${playerOne.value}`

  }
  if(playerTwo.value === ''){
    playerTwoName = 'Player 2 : Computer'
    }else{
      playerTwoName = `Player 2 : ${playerTwo.value}`
    }
  playerOneNameSpan.innerHTML = playerOneName
  playerTwoNameSpan.innerHTML = playerTwoName
  // playerArea.style.visibility = 'hidden'
  
}


gameArea.addEventListener("click", function (clickEvent) {
  
  if (clickEvent.target.matches(".gameTile")) {
    if(gameMode === 0){
      gameOverClassAdd()
      alert('Please select a game mode')
    }
    if (
      clickEvent.target.matches(".x") ||
      clickEvent.target.matches(".o") ||
      clickEvent.target.matches(".gameOver")
    ) {
    } else {
      let currentPlayer = gameState.players[turnCounter % 2];

      clickEvent.target.classList.toggle(currentPlayer);
      updateGameBoard(clickEvent.target);
      turnCounter++;

      itsATie();
    }
  }
});

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
    playerOneNameSpan.innerHTML = ''
    playerTwoNameSpan.innerHTML = ''
    playerOne.style.visibility = 'visible'
    playerTwo.style.visibility = 'visible'

    turnCounter = 0;
    gameOverClassRemoveAndText();

  }

  if (clickEvent.target.matches(".vsComputer")){
    if(gameMode === 1){
    } else{
      boardReset()
      gameOverClassRemoveAndText();
    }
    gameMode = 1
  }
  
  if (clickEvent.target.matches(".twoPlayer")){
    if(gameMode === 2){
    } else{
      boardReset()
      gameOverClassRemoveAndText();
    }
    gameMode = 2
  }
  console.log(gameMode)
});

function updateGameBoard(num) {
  let currentPlayer = gameState.players[turnCounter % 2];
  const rowNumber = num.dataset.row;
  const columnNumber = num.dataset.column;
  if (gameState.board[rowNumber][columnNumber] === null) {
    gameState.board[rowNumber][columnNumber] = currentPlayer;
    checkRowWin(rowNumber);
    checkColumnWin(columnNumber);
    checkDiagonalWin();
  }
}









function gameOverClassAdd() {
  for (i = 0; i < gameGrid.length; i++) {
    gameGrid[i].classList.add("gameOver");
  }
}

function gameOverClassRemoveAndText() {
  for (i = 0; i < gameGrid.length; i++) {
    gameGrid[i].classList.remove("gameOver");
  }
    endResultTitle.style.visibility = "hidden";
    endResultTitle.style.transform = "none";
    endResultTitle.style.transition = "none";
}

function endGame(string) {
  endResultTitle.innerHTML = string;
  endResultTitle.style.visibility = "visible";
  endResultTitle.style.transform = "rotate(360deg)";
  endResultTitle.style.transition = "width 2s, height 2s, transform 2s";

  gameOverClassAdd();
}

function checkRowWin(row) {
  let rowNumber = Number(row);
  let currentPlayer = gameState.players[turnCounter % 2];
  for (i = 0; i < 3; i++) {
    if (gameState.board[rowNumber][i] === currentPlayer) {
    } else {
      return false;
    }
  }

  endGame(`${currentPlayer} has won! Congratulations!`);
  turnCounter = 0;
  gameOverClassAdd();
}

function checkColumnWin(column) {
  let columnNumber = Number(column);
  let currentPlayer = gameState.players[turnCounter % 2];
  for (i = 0; i < 3; i++) {
    if (gameState.board[i][columnNumber] === currentPlayer) {
    } else {
      return false;
    }
  }

  endGame(`${currentPlayer} has won! Congratulations!`);
  turnCounter = 0;
  gameOverClassAdd();
}

function checkDiagonalWin() {
  let currentPlayer = gameState.players[turnCounter % 2];
  if (
    gameState.board[0][0] === currentPlayer &&
    gameState.board[1][1] === currentPlayer &&
    gameState.board[2][2] === currentPlayer
  ) {
    endGame(`${currentPlayer} has won! Congratulations!`);
    turnCounter = 0;
    gameOverClassAdd();
  }

  if (
    gameState.board[2][0] === currentPlayer &&
    gameState.board[1][1] === currentPlayer &&
    gameState.board[0][2] === currentPlayer
  ) {
    endGame(`${currentPlayer} has won! Congratulations!`);
    turnCounter = 0;
    gameOverClassAdd();
  }
}

function itsATie() {
  if (turnCounter === 9) {
    endGame(`It's a tie!`);
  }
}



function boardReset() {
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

  turnCounter = 0;
}