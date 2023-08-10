let iterations = 9
let diceValue

const currentScore = document.querySelector('.current__score-player')

const rollDice = document.querySelector('[data-js="roll-dice"]')

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

function aleatoire(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clean() {
    const cleanning = document.querySelectorAll('.clean')
    cleanning.forEach(element => {
        element.style.visibility = 'hidden'
    })
}

function diceRoll() {
    clean()
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