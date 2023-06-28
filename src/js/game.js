const createGameBoard = () => {
  for (let i = 0; i < 9; i++) {
    const square = document.createElement('div')
    square.className = 'bg-blue-400 hover:bg-blue-500'
    square.id = i + 1
    gameBoard.appendChild(square)
  }
}

createGameBoard()
