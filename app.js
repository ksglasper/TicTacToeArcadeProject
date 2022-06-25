const gameState = {
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};
const endResultTitle = document.getElementById("endResult");
function endGame(string){
  endResultTitle.innerHTML = string
  endResultTitle.style.visibility = 'visible'
  gameOverClassAdd()
  // console.log(gameGrid)
}

gameGrid = document.getElementsByClassName("gameTile");
const gameArea = document.getElementById("gameBoard");
// const gameGrid = Array.from(gameArea);
let turnCounter = 0;


gameArea.addEventListener("mousedown", function (clickEvent) {
  console.log(clickEvent.target)

  if (clickEvent.target.matches(".gameTile")) {
    if (clickEvent.target.matches(".x") || clickEvent.target.matches(".o") || clickEvent.target.matches(".gameOver")) {
    } else {
      let currentPlayer = gameState.players[turnCounter % 2];

      clickEvent.target.classList.toggle(currentPlayer,true);
      updateGameBoard(clickEvent.target)
      turnCounter++;

     
      itsATie()
      
      
    }
  }
});
console.log(gameGrid.length)
function gameOverClassAdd(){
  for(i = 0; i < gameGrid.length; i++){
  gameGrid[i].classList.add('gameOver')

  }

}

function gameOverClassRemove(){
  for(i = 0; i < gameGrid.length; i++){
  gameGrid[i].classList.remove('gameOver')

  }

}

function updateGameBoard(num) {
  let currentPlayer = gameState.players[turnCounter % 2];
  const rowNumber = num.dataset.row;
  const columnNumber = num.dataset.column;
  if (gameState.board[rowNumber][columnNumber] === null) {
    gameState.board[rowNumber][columnNumber] = currentPlayer;
    // console.log(typeof(Number(rowNumber)));
    console.log(gameState.board);
    // console.log(gameState.board[rowNumber][columnNumber]);
    // console.log(gameState.board[(Number(rowNumber))][columnNumber])
   checkRowWin(rowNumber)
   checkColumnWin(columnNumber)

  }
}
function itsATie(){
  if(turnCounter === 9){
    endGame(`It's a tie!`)
  }
  console.log(turnCounter);
  
}

function checkRowWin(row){
  let rowNumber = Number(row)
  let currentPlayer = gameState.players[turnCounter % 2];
  for(i = 0; i < 3; i++){
    if(gameState.board[rowNumber][i] === currentPlayer){
    
    } else{
        return false
        

    }
    // console.log(gameState.board[rowNumber][0])
    // console.log(gameState.board[rowNumber][1])
    // console.log(gameState.board[rowNumber][2])

    
  }
  console.log(turnCounter);

  endGame(`${currentPlayer} has won! Congratulations!`)
  turnCounter = 0
  gameOverClassAdd()


//   boardReset()


}
function checkColumnWin(column){
    let columnNumber = Number(column)
    let currentPlayer = gameState.players[turnCounter % 2];
    for(i = 0; i < 3; i++){
      if(gameState.board[i][columnNumber] === currentPlayer){
      
      } else{
          return false
          
  
      }
    //   console.log(gameState.board[columnNumber][0])
    //   console.log(gameState.board[columnNumber][1])
    //   console.log(gameState.board[columnNumber][2])
  
      
    }
    console.log(turnCounter);

    endGame(`${currentPlayer} has won! Congratulations!`)
  turnCounter = 0
  gameOverClassAdd()


  //   boardReset()
  
  
  }
// function checkDiagonalWin(row, column){
//   let currentPlayer = gameState.players[turnCounter % 2];
//   let rowNumber = Number(row)
//   let columnNumber = Number(column)
//   let currentPlayer = gameState.players[turnCounter % 2];
//   for(i = 0; i < 3; i++){
//     if(gameState.board[rowNumber][i] !== currentPlayer){
//         break
//     } else{
//         alert( `${currentPlayer} has won! Congratulations!`)
//         boardReset()

//     }
//   }
    
// }

function boardReset(){
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

    turnCounter = 0
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

    // console.log(gameState.board);
  }
  turnCounter = 0
  gameOverClassRemove()

});

// console.log(gameGrid);

//Code for checking if the game has been won
// alert(num.innerHTML + " is " + [rowNumber,columnNumber] +".");
