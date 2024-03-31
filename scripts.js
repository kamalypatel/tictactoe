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
    return { createGameBoard };
})();

runGame.createGameBoard()