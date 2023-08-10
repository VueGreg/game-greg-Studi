// -------------Variables

let iterations = 9
let diceValue

const currentScore = document.querySelector('.current__score-player')
const globalScore = document.querySelector('[data-js="score-player-one"]')

const rollDice = document.querySelector('[data-js="roll-dice"]')
const hold = document.querySelector('[data-js="hold"]')

const one = document.querySelector('[data-js="middle"]')

const two = [
    document.querySelector('[data-js="top-right"]'),
    document.querySelector('[data-js="bottom-left"]')
]

const three = [
    document.querySelector('[data-js="top-right"]'),
    document.querySelector('[data-js="bottom-left"]'),
    document.querySelector('[data-js="middle"]')
]

const four = [
    document.querySelector('[data-js="top-right"]'),
    document.querySelector('[data-js="top-left"]'),
    document.querySelector('[data-js="bottom-right"]'),
    document.querySelector('[data-js="bottom-left"]')
]

const five = [
    document.querySelector('[data-js="top-right"]'),
    document.querySelector('[data-js="top-left"]'),
    document.querySelector('[data-js="bottom-right"]'),
    document.querySelector('[data-js="bottom-left"]'),
    document.querySelector('[data-js="middle"]')
]

const six = [
    document.querySelector('[data-js="top-right"]'),
    document.querySelector('[data-js="top-left"]'),
    document.querySelector('[data-js="bottom-right"]'),
    document.querySelector('[data-js="bottom-left"]'),
    document.querySelector('[data-js="middle-left"]'),
    document.querySelector('[data-js="middle-right"]')
]

const diceFace = [one, two, three, four, five, six]
// -------------------------End variable

// ------------------------Event
rollDice.addEventListener('click', () => {
    iterations = 9
    diceRoll()
    setTimeout (() => {
        if (diceValue != 1) {
            let actualScore = Number(currentScore.textContent)
            currentScore.textContent = addScore(actualScore, diceValue) 
        } else {currentScore.textContent = 0}
    }, 1100)
})

hold.addEventListener('click', () => {
    let gScore = Number(globalScore.textContent)
    let actualScore = Number(currentScore.textContent)
    globalScore.textContent = addScore(gScore, actualScore)
})
// ------------------------End event


// -----------------------Functions
function aleatoire(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clean(selector) {
    const cleanning = document.querySelectorAll(selector)
    cleanning.forEach(element => {
        element.style.visibility = 'hidden'
    })
}

function diceRoll() {
    clean('.clean')
    let aleaNumber = aleatoire(0, 5)
    
    for (let i = 0; i < diceFace.length; i++) {
        if (i == aleaNumber && aleaNumber != 0) {
            diceFace[i].forEach(element => {
                element.style.visibility = 'visible'
            }) 
        } else if(aleaNumber == 0) {diceFace[0].style.visibility = 'visible'}
    }
    if (iterations-- > 0) {
        setTimeout(diceRoll, 100);
    }
    diceValue = parseInt(aleaNumber) + 1
}

function addScore(scoreOne, scoreTwo) {
    return scoreOne + scoreTwo
}