const createGameBoard = () => {
  for (let i = 0; i < 9; i++) {
    const square = document.createElement('div')
    square.className = 'bg-blue-400 hover:bg-blue-500'
    square.id = i + 1
    gameBoard.appendChild(square)
  }
}

const Player = (name, figure, count, isPlaying) => {
  return { name, figure, count, isPlaying }
}

const round = []

const playerOne = Player('', 'x', 0, true)

const playerTwo = Player('', 'o', 0, false)

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
