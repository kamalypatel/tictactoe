const runGame = ( () => {
    const createGameBoard = () => {
        for (let i = 1; i <= 9; i++) {
            const gameContainer = document.querySelector('.gameContainer')
            const gameSquare = document.createElement('div')
            gameSquare.classList.add('gameSquare')
            gameSquare.setAttribute('id', i.toString())
            gameContainer.appendChild(gameSquare)
        }
    }
    const createPlayerOne = (name) => {
        let score = 0
        const getPlayerOneScore = () => score;
        const addPlayerOneScore = () => score++
        
        return { name, getPlayerOneScore, addPlayerOneScore }
    }

    const createPlayerTwo = (name) => {
        let score = 0
        const getPlayerTwoScore = () => score;
        const addPlayerTwoScore = () => score++
        
        return { name, getPlayerTwoScore, addPlayerTwoScore }
    }



    return { createGameBoard, createPlayerOne, createPlayerTwo}
})();

runGame.createGameBoard()

const kamal = runGame.createPlayer('kamal')
kamal.addPlayerScore()
kamal.addPlayerScore()
kamal.addPlayerScore()
kamal.addPlayerScore()


console.log(kamal.getPlayerScore())