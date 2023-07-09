
let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];


const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


function makeMove(cellIndex) {
  if (gameState[cellIndex] === '' && gameActive) {
    gameState[cellIndex] = currentPlayer;
    document.getElementById(`cell${cellIndex}`).innerText = currentPlayer;
    document.getElementById(`cell${cellIndex}`).classList.add(currentPlayer.toLowerCase());

    if (checkWin()) {
      document.getElementById('game-status').innerText = `Player ${currentPlayer} wins!`;
      endGame();
    } else if (checkDraw()) {
      document.getElementById('game-status').innerText = 'It\'s a draw!';
      endGame();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}


function checkWin() {
  for (let combination of winningCombinations) {
    let [a, b, c] = combination;
    if (gameState[a] === gameState[b] && gameState[b] === gameState[c] && gameState[a] !== '') {
      return true;
    }
  }
  return false;
}


function checkDraw() {
  return gameState.every(cell => cell !== '');
}


function endGame() {
  gameActive = false;
}


function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  document.getElementById('game-status').innerText = '';
  let cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.innerText = '';
    cell.classList.remove('x', 'o');
  }
}
