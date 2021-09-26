let playerOne = 'Player One'
let playerTwo = 'Player Two'

function returnPlayerNames(){
    playerOne = document.getElementById("playerOneName").value;
    playerTwo = document.getElementById("playerTwoName").value;
    currentMove = playerOne;
}

let currentMove = playerOne;

const btn1 = document.querySelector('#one');
btn1.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn1.appendChild(input);
        document.getElementById("one").disabled = true;
        checkWinnerOne();
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn1.appendChild(input);
        document.getElementById("one").disabled = true;
        checkWinnerOne();
        currentMove = playerOne;
    };})

const btn2 = document.querySelector('#two');
btn2.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn2.appendChild(input);
        document.getElementById("two").disabled = true;
        checkWinnerTwo();
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn2.appendChild(input);
        document.getElementById("two").disabled = true;
        checkWinnerTwo();
        currentMove = playerOne;
    };})

const btn3 = document.querySelector('#three');
btn3.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn3.appendChild(input);
        document.getElementById("three").disabled = true;
        checkWinnerThree();
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn3.appendChild(input);
        document.getElementById("three").disabled = true;
        checkWinnerThree();
        currentMove = playerOne;
    };})

const btn4 = document.querySelector('#four');
btn4.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn4.appendChild(input);
        document.getElementById("four").disabled = true;
        checkWinnerFour();
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn4.appendChild(input);
        document.getElementById("four").disabled = true;
        checkWinnerFour();
        currentMove = playerOne;
    };})

const btn5 = document.querySelector('#five');
btn5.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn5.appendChild(input);
        document.getElementById("five").disabled = true;
        checkWinnerFive();
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn5.appendChild(input);
        document.getElementById("five").disabled = true;
        checkWinnerFive();
        currentMove = playerOne;
    };})

const btn6 = document.querySelector('#six');
btn6.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn6.appendChild(input);
        document.getElementById("six").disabled = true;
        checkWinnerSix();
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn6.appendChild(input);
        document.getElementById("six").disabled = true;
        checkWinnerSix();
        currentMove = playerOne;
    };})

const btn7 = document.querySelector('#seven');
btn7.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn7.appendChild(input);
        document.getElementById("seven").disabled = true;
        checkWinnerSeven();
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn7.appendChild(input);
        document.getElementById("seven").disabled = true;
        checkWinnerSeven();
        currentMove = playerOne;
    };})

const btn8 = document.querySelector('#eight');
btn8.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn8.appendChild(input);
        document.getElementById("eight").disabled = true;
        checkWinnerEight();
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn8.appendChild(input);
        document.getElementById("eight").disabled = true;
        checkWinnerEight();
        currentMove = playerOne;
    };})

const btn9 = document.querySelector('#nine');
btn9.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn9.appendChild(input);
        document.getElementById("nine").disabled = true;
        checkWinnerNine();
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn9.appendChild(input);
        document.getElementById("nine").disabled = true;
        checkWinnerNine();
        currentMove = playerOne;
    };})

const reset = document.querySelector('#resetButton');
reset.addEventListener('click', () => {
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = false;
    document.getElementById("four").disabled = false;
    document.getElementById("five").disabled = false;
    document.getElementById("six").disabled = false;
    document.getElementById("seven").disabled = false;
    document.getElementById("eight").disabled = false;
    document.getElementById("nine").disabled = false;
    const one = document.getElementById('one')
    one.innerHTML = '';
    const two = document.getElementById('two')
    two.innerHTML = '';
    const three = document.getElementById('three')
    three.innerHTML = '';
    const four = document.getElementById('four')
    four.innerHTML = '';
    const five = document.getElementById('five')
    five.innerHTML = '';
    const six = document.getElementById('six')
    six.innerHTML = '';
    const seven = document.getElementById('seven')
    seven.innerHTML = '';
    const eight = document.getElementById('eight')
    eight.innerHTML = '';
    const nine = document.getElementById('nine')
    nine.innerHTML = '';
    const winnerStatement = document.getElementById('winner');
    winnerStatement.innerHTML = '';
}
)

function checkWinnerOne() {
    if (document.getElementById('one').textContent == document.getElementById('two').textContent && document.getElementById('one').textContent == document.getElementById('three').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    } else if (document.getElementById('one').textContent == document.getElementById('four').textContent && document.getElementById('one').textContent == document.getElementById('seven').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    } else if (document.getElementById('one').textContent == document.getElementById('five').textContent && document.getElementById('one').textContent == document.getElementById('nine').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    };
}

function checkWinnerTwo() {
    if (document.getElementById('one').textContent == document.getElementById('two').textContent && document.getElementById('one').textContent == document.getElementById('three').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    } else if (document.getElementById('two').textContent == document.getElementById('five').textContent && document.getElementById('two').textContent == document.getElementById('eight').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    };
}

function checkWinnerThree() {
    if (document.getElementById('one').textContent == document.getElementById('two').textContent && document.getElementById('one').textContent == document.getElementById('three').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    } else if (document.getElementById('three').textContent == document.getElementById('six').textContent && document.getElementById('three').textContent == document.getElementById('nine').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    } else if (document.getElementById('three').textContent == document.getElementById('five').textContent && document.getElementById('three').textContent == document.getElementById('seven').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    };
}

function checkWinnerFour() {
    if (document.getElementById('four').textContent == document.getElementById('five').textContent && document.getElementById('four').textContent == document.getElementById('six').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    } else if (document.getElementById('one').textContent == document.getElementById('four').textContent && document.getElementById('one').textContent == document.getElementById('seven').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    };
}

function checkWinnerFive() {
    if (document.getElementById('four').textContent == document.getElementById('five').textContent && document.getElementById('four').textContent == document.getElementById('six').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    } else if (document.getElementById('two').textContent == document.getElementById('five').textContent && document.getElementById('two').textContent == document.getElementById('eight').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    } else if (document.getElementById('one').textContent == document.getElementById('five').textContent && document.getElementById('one').textContent == document.getElementById('nine').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    };
}

function checkWinnerSix() {
    if (document.getElementById('four').textContent == document.getElementById('five').textContent && document.getElementById('four').textContent == document.getElementById('six').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    } else if (document.getElementById('three').textContent == document.getElementById('six').textContent && document.getElementById('three').textContent == document.getElementById('nine').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    };
}

function checkWinnerSeven() {
    if (document.getElementById('one').textContent == document.getElementById('four').textContent && document.getElementById('one').textContent == document.getElementById('seven').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    } else if (document.getElementById('seven').textContent == document.getElementById('eight').textContent && document.getElementById('seven').textContent == document.getElementById('nine').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    } else if (document.getElementById('three').textContent == document.getElementById('five').textContent && document.getElementById('three').textContent == document.getElementById('seven').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    };
}

function checkWinnerEight() {
    if (document.getElementById('two').textContent == document.getElementById('five').textContent && document.getElementById('two').textContent == document.getElementById('eight').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    } else if (document.getElementById('seven').textContent == document.getElementById('eight').textContent && document.getElementById('seven').textContent == document.getElementById('nine').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    };
}

function checkWinnerNine() {
    if (document.getElementById('seven').textContent == document.getElementById('eight').textContent && document.getElementById('seven').textContent == document.getElementById('nine').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    } else if (document.getElementById('three').textContent == document.getElementById('six').textContent && document.getElementById('three').textContent == document.getElementById('nine').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    } else if (document.getElementById('one').textContent == document.getElementById('five').textContent && document.getElementById('one').textContent == document.getElementById('nine').textContent) {
        const winner = document.querySelector('#winner');
        const statement = document.createElement('p');
        statement.textContent = `Congratulations ${currentMove}, you win the game!`;
        winner.appendChild(statement);
        disableAll();
    };
}

function disableAll() {
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("six").disabled = true;
    document.getElementById("seven").disabled = true;
    document.getElementById("eight").disabled = true;
    document.getElementById("nine").disabled = true;
}