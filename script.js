// -------------Variables

let iterations = 9
let diceValue
let player = 0

// hide player
const hidePlayer = document.querySelector('[data-js="hide-player"]')

// score selector
const currentScore = document.querySelectorAll('.current__score-player')
const globalScore = document.querySelectorAll('.container__score')

//opacity selector
const opacityPlayer1 = document.querySelectorAll('.opacity__player-one')
const opacityPlayer2 = document.querySelectorAll('.opacity__player-two')

// button action
const rollDice = document.querySelector('[data-js="roll-dice"]')
const hold = document.querySelector('[data-js="hold"]')
const newGame = document.querySelector('.new-game')

// dice dot table
const currentDice = document.querySelector('.current-dice')

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
newGame.addEventListener('click', () => {
    resetAll()
})

rollDice.addEventListener('click', () => {
    iterations = 9
    diceRoll()
    setTimeout (() => {
        if (diceValue != 1) {
            let actualScore = Number(currentScore[player].textContent)
            currentScore[player].textContent = addScore(actualScore, diceValue)
            currentDice.textContent = diceValue
        } else {
            currentScore[player].textContent = 0
            currentDice.textContent = diceValue
            changePlayer()
        }
    }, 1100)
})

hold.addEventListener('click', () => {
    let gScore = Number(globalScore[player].textContent)
    let actualScore = Number(currentScore[player].textContent)
    globalScore[player].textContent = addScore(gScore, actualScore)
    currentScore[player].textContent = 0
    changePlayer()
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

function changePlayer() {
    setTimeout(() => {
        if (player == 0) {
            player = 1
        } else {player = 0}
    },500)
    if (player == 0) {
        hidePlayer.classList.remove('hide-player0')
        hidePlayer.classList.add('hide-player1')
            opacityPlayer1.forEach(element => {
                element.classList.add('opacity-change')
            });
            opacityPlayer2.forEach(element => {
                element.classList.remove('opacity-change')
            });
    } else {
        hidePlayer.classList.remove('hide-player1')
        hidePlayer.classList.add('hide-player0')
            opacityPlayer2.forEach(element => {
                element.classList.add('opacity-change')
            });
            opacityPlayer1.forEach(element => {
                element.classList.remove('opacity-change')
            });
    }
}

function resetAll() {
    currentScore.forEach(element => {
        element.textContent = 0
    })
    globalScore.forEach(element => {
        element.textContent = 0
    })
    player = 0
    hidePlayer.classList.remove('hide-player1')
    hidePlayer.classList.add('hide-player0')
    currentDice.textContent = ""
    clean('.clean')
    opacityPlayer2.forEach(element => {
        element.classList.add('opacity-change')
    });
    opacityPlayer1.forEach(element => {
        element.classList.remove('opacity-change')
    });
}