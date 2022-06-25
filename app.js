const gameState = {
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};
const endResultTitle = document.getElementById("endResult");
function endGame(){
  endResultTitle.innerHTML = 'Here i am'
  endResultTitle.style.visibility = 'visible'
}

classArrayLike = document.getElementsByClassName("gameTile");

const gameGrid = Array.from(classArrayLike);
let turnCounter = 0;

const gameArea = document.getElementById("gameBoard");
gameArea.addEventListener("mousedown", function (clickEvent) {
  console.log(clickEvent.target)

  if (clickEvent.target.matches(".gameTile")) {
    if (clickEvent.target.matches(".x") || clickEvent.target.matches(".o")) {
    } else {
      let currentPlayer = gameState.players[turnCounter % 2];

      clickEvent.target.classList.toggle(currentPlayer,true);

      turnCounter++;
      itsATie()
      endGame()
      
    }
  }
});

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

  alert( `${currentPlayer} has won! Congratulations!`)
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

    alert( `${currentPlayer} has won! Congratulations!`)
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

});

// console.log(gameGrid);

//Code for checking if the game has been won
// alert(num.innerHTML + " is " + [rowNumber,columnNumber] +".");
