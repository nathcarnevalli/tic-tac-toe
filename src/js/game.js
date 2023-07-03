const createGameBoard = () => {
  for (let i = 0; i < 9; i++) {
    const square = document.createElement('div')
    square.className = 'bg-blue-400 hover:bg-blue-500'
    square.id = i + 1
    gameBoard.appendChild(square)
  }
}

const Player = (name, count, isPlaying, round, isWinner) => {
  return { name, count, isPlaying, round, isWinner }
}

const playerOne = Player('', 0, true, [], false)

const playerTwo = Player('', 0, false, [], false)

const hide = element => {
  element.classList.add('hidden')
}

const show = element => {
  element.classList.remove('hidden')
}

const start = event => {
  hide(event.target.parentElement)
  show(event.target.parentElement.nextElementSibling)
}

const play = event => {
  event.preventDefault()
  playerOne.name = p1.value
  playerTwo.name = p2.value
  p1Name.innerText = playerOne.name
  p2Name.innerText = playerTwo.name
  hide(event.target.parentElement)
  show(event.target.parentElement.nextElementSibling)
}

const checkWinner = rounds => {
  const winner = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]

  for (let win of winner) {
    let countWin = 0
    for (let pos of win) {
      for (let round of rounds) {
        if (round === pos) {
          countWin++
        }
      }
    }
    if (countWin >= 3) {
      return true
    }
  }

  return false
}

const endGame = winner => {
  console.log(winner)
}

gameBoard.addEventListener('click', event => {
  if (
    event.target.style.backgroundImage === '' &&
    event.target.id !== 'gameBoard'
  ) {
    if (playerOne.isPlaying) {
      playerOne.isPlaying = false
      playerTwo.isPlaying = true
      event.target.style.backgroundImage = 'url("../src/images/x.svg")'
      event.target.style.backgroundRepeat = 'no-repeat'
      event.target.style.backgroundSize = 'cover'
      playerOne.round.push(Number(event.target.id))

      if (checkWinner(playerOne.round)) {
        endGame(playerOne.name)
        playerOne.count += 1
      }
    } else {
      playerOne.isPlaying = true
      playerTwo.isPlaying = false
      event.target.style.backgroundImage = 'url("../src/images/o.svg")'
      event.target.style.backgroundRepeat = 'no-repeat'
      event.target.style.backgroundSize = 'cover'
      playerTwo.round.push(Number(event.target.id))
      playerTwo.isWinner = checkWinner(playerTwo.round)

      if (checkWinner(playerOne.round)) {
        endGame(playerTwo.name)
        playerTwo.count += 1
      }
    }
  }

  if (playerOne.round.length > 5 || playerTwo.round.length > 4) {
    endGame('Tie')
  }
})
