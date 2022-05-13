let squares = document.querySelectorAll('.square')
let mole = document.querySelector('.mole')
let score = document.querySelector('#score')
let timeLeft = document.querySelector('#time-left')

let result = 0

const randomSquare = () => {
  squares.forEach((square) => {
    square.classList.remove('mole')
  })
  let randomSquare = squares[Math.floor(Math.random() * squares.length)]
  randomSquare.classList.add('mole')

}

const moveMole = () => {
  let timerID = null;
  timerID = setInterval(() => {
    randomSquare()
  }, 500);
}

moveMole()