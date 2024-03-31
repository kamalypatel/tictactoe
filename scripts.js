const runGame = ( () => {
    const createGameBoard = () => {
        for (let i = 1; i <= 9; i++) {
            const gameContainer = document.querySelector('.gameContainer')
            const gameSquare = document.createElement('div')
            gameSquare.classList.add('gameSquare')
            gameSquare.setAttribute('id', i.toString())
            gameSquare.addEventListener('click', () => {
                if (gameSquare.innerText == '' && playerWins == false) {
                    gameSquare.innerText = playGame()
                    checkScore()
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

    let playerWins = false

    const checkScore = () => {
        if (document.getElementById('1').innerText !== '' && document.getElementById('1').innerText == document.getElementById('2').innerText && document.getElementById('2').innerText == document.getElementById('3').innerText) {
            playerWins = true
            if (document.getElementById('1').innerText == 'X') {
                playerOne.addPlayerOneScore()
                console.log(`Player One's score is now ${playerOne.getPlayerOneScore()}`)
            } else {
                playerTwo.addPlayerTwoScore()
                console.log(`Player Two's score is now ${playerTwo.getPlayerTwoScore()}`)
            }
        } else if (document.getElementById('4').innerText !== '' && document.getElementById('4').innerText == document.getElementById('5').innerText && document.getElementById('5').innerText == document.getElementById('6').innerText) {
            playerWins = true
            if (document.getElementById('4').innerText == 'X') {
                playerOne.addPlayerOneScore()
                console.log(`Player One's score is now ${playerOne.getPlayerOneScore()}`)
            } else {
                playerTwo.addPlayerTwoScore()
                console.log(`Player Two's score is now ${playerTwo.getPlayerTwoScore()}`)
            }
        } else if (document.getElementById('7').innerText !== '' && document.getElementById('7').innerText == document.getElementById('8').innerText && document.getElementById('8').innerText == document.getElementById('9').innerText) {
            playerWins = true
            if (document.getElementById('7').innerText == 'X') {
                playerOne.addPlayerOneScore()
                console.log(`Player One's score is now ${playerOne.getPlayerOneScore()}`)
            } else {
                playerTwo.addPlayerTwoScore()
                console.log(`Player Two's score is now ${playerTwo.getPlayerTwoScore()}`)
            }
        } else if (document.getElementById('1').innerText !== '' && document.getElementById('1').innerText == document.getElementById('4').innerText && document.getElementById('4').innerText == document.getElementById('7').innerText) {
            playerWins = true
            if (document.getElementById('1').innerText == 'X') {
                playerOne.addPlayerOneScore()
                console.log(`Player One's score is now ${playerOne.getPlayerOneScore()}`)
            } else {
                playerTwo.addPlayerTwoScore()
                console.log(`Player Two's score is now ${playerTwo.getPlayerTwoScore()}`)
            }
        } else if (document.getElementById('2').innerText !== '' && document.getElementById('2').innerText == document.getElementById('5').innerText && document.getElementById('5').innerText == document.getElementById('8').innerText) {
            playerWins = true
            if (document.getElementById('2').innerText == 'X') {
                playerOne.addPlayerOneScore()
                console.log(`Player One's score is now ${playerOne.getPlayerOneScore()}`)
            } else {
                playerTwo.addPlayerTwoScore()
                console.log(`Player Two's score is now ${playerTwo.getPlayerTwoScore()}`)
            }
        } else if (document.getElementById('3').innerText !== '' && document.getElementById('3').innerText == document.getElementById('6').innerText && document.getElementById('6').innerText == document.getElementById('9').innerText) {
            playerWins = true
            if (document.getElementById('3').innerText == 'X') {
                playerOne.addPlayerOneScore()
                console.log(`Player One's score is now ${playerOne.getPlayerOneScore()}`)
            } else {
                playerTwo.addPlayerTwoScore()
                console.log(`Player Two's score is now ${playerTwo.getPlayerTwoScore()}`)
            }
        } else if (document.getElementById('1').innerText !== '' && document.getElementById('1').innerText == document.getElementById('5').innerText && document.getElementById('5').innerText == document.getElementById('9').innerText) {
            playerWins = true
            if (document.getElementById('1').innerText == 'X') {
                playerOne.addPlayerOneScore()
                console.log(`Player One's score is now ${playerOne.getPlayerOneScore()}`)
            } else {
                playerTwo.addPlayerTwoScore()
                console.log(`Player Two's score is now ${playerTwo.getPlayerTwoScore()}`)
            }
        } else if (document.getElementById('3').innerText !== '' && document.getElementById('3').innerText == document.getElementById('5').innerText && document.getElementById('5').innerText == document.getElementById('7').innerText) {
            playerWins = true
            if (document.getElementById('3').innerText == 'X') {
                playerOne.addPlayerOneScore()
                console.log(`Player One's score is now ${playerOne.getPlayerOneScore()}`)
            } else {
                playerTwo.addPlayerTwoScore()
                console.log(`Player Two's score is now ${playerTwo.getPlayerTwoScore()}`)
            }
        } else {
            
        }
    }

    return { createGameBoard, createPlayerOne, createPlayerTwo}
})();

const playerOne = runGame.createPlayerOne(prompt("what's player 1's name?"))
console.log(playerOne.name)

const playerTwo = runGame.createPlayerTwo(prompt("what's player 2's name?"))
console.log(playerTwo.name)

runGame.createGameBoard()