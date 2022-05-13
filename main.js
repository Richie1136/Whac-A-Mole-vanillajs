let squares = document.querySelectorAll('.square')
let mole = document.querySelector('.mole')
let score = document.querySelector('#score')
let timeLeft = document.querySelector('#time-left')
console.log(squares)

squares.forEach((square) => {
  square.addEventListener('click')
})