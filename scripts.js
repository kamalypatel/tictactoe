const runGame = ( () => {
    const createGameBoard = () => {
        for (let i = 1; i <= 9; i++) {
            const gameContainer = document.querySelector('.gameContainer')
            const gameSquare = document.createElement('div')
            gameSquare.classList.add('gameSquare')
            gameSquare.setAttribute('id', i.toString())
            gameSquare.addEventListener('click', () => {
                if (gameSquare.innerText == '') {
                    gameSquare.innerText = playGame()
                }
            })
            gameContainer.appendChild(gameSquare)
        }
    }
    const createPlayerOne = (name) => {
        let score = 0
        const getPlayerOneScore = () => score;
        const addPlayerOneScore = () => score++

        let marker = 'X'
        
        return { name, getPlayerOneScore, addPlayerOneScore, marker}
    }

    const createPlayerTwo = (name) => {
        let score = 0
        const getPlayerTwoScore = () => score;
        const addPlayerTwoScore = () => score++
        
        let marker = 'O'

        return { name, getPlayerTwoScore, addPlayerTwoScore, marker }
    }

    let currentTurn = 1;
    
    const playGame = () => {
        if (currentTurn % 2 != 0) {
            currentTurn++
            return playerOne.marker
        } else {
            currentTurn++
            return playerTwo.marker
        }
    }

    return { createGameBoard, createPlayerOne, createPlayerTwo}
})();

const playerOne = runGame.createPlayerOne(prompt("what's player 1's name?"))
console.log(playerOne.name)

const playerTwo = runGame.createPlayerTwo(prompt("what's player 2's name?"))
console.log(playerTwo.name)

runGame.createGameBoard()