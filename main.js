let squares = document.querySelectorAll('.square')
let mole = document.querySelector('.mole')
let score = document.querySelector('#score')
let timeLeft = document.querySelector('#time-left')

let result = 0
let hitPosition;
let currentTime = 60

const randomSquare = () => {
  squares.forEach((square) => {
    square.classList.remove('mole')
  })
  let randomSquare = squares[Math.floor(Math.random() * squares.length)]
  randomSquare.classList.add('mole')
  hitPosition = randomSquare.id
}

squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id === hitPosition) {
      result++
      score.innerHTML = result
      hitPosition = null
    }
  })
})



const moveMole = () => {
  let timerID = null;
  timerID = setInterval(() => {
    randomSquare()
  }, 500);
}

moveMole()


const countdown = () => {
  currentTime--
  timeLeft.innerHTML = currentTime

  if (currentTime === 0) {
    clearInterval(countdownTimerId)
    alert(`Time has ran out! Your final score is ${result}`)
  }

}

countdown()

let countdownTimerId = setInterval(() => {
  countdown()
}, 1000);