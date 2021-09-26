let playerOne = 'playerOne'
let playerTwo = 'playerTwo'
let currentMove = playerOne;

const btn1 = document.querySelector('#one');
btn1.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn1.appendChild(input);
        document.getElementById("one").disabled = true;
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn1.appendChild(input);
        document.getElementById("one").disabled = true;
        currentMove = playerOne;
    };})

const btn2 = document.querySelector('#two');
btn2.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn2.appendChild(input);
        document.getElementById("two").disabled = true;
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn2.appendChild(input);
        document.getElementById("two").disabled = true;
        currentMove = playerOne;
    };})

const btn3 = document.querySelector('#three');
btn3.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn3.appendChild(input);
        document.getElementById("three").disabled = true;
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn3.appendChild(input);
        document.getElementById("three").disabled = true;
        currentMove = playerOne;
    };})

const btn4 = document.querySelector('#four');
btn4.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn4.appendChild(input);
        document.getElementById("four").disabled = true;
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn4.appendChild(input);
        document.getElementById("four").disabled = true;
        currentMove = playerOne;
    };})

const btn5 = document.querySelector('#five');
btn5.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn5.appendChild(input);
        document.getElementById("five").disabled = true;
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn5.appendChild(input);
        document.getElementById("five").disabled = true;
        currentMove = playerOne;
    };})

const btn6 = document.querySelector('#six');
btn6.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn6.appendChild(input);
        document.getElementById("six").disabled = true;
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn6.appendChild(input);
        document.getElementById("six").disabled = true;
        currentMove = playerOne;
    };})

const btn7 = document.querySelector('#seven');
btn7.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn7.appendChild(input);
        document.getElementById("seven").disabled = true;
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn7.appendChild(input);
        document.getElementById("seven").disabled = true;
        currentMove = playerOne;
    };})

const btn8 = document.querySelector('#eight');
btn8.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn8.appendChild(input);
        document.getElementById("eight").disabled = true;
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn8.appendChild(input);
        document.getElementById("eight").disabled = true;
        currentMove = playerOne;
    };})

const btn9 = document.querySelector('#nine');
btn9.addEventListener('click', () => {
    if (currentMove == playerOne) {
        const input = document.createElement('p');
        input.textContent = 'X'
        btn9.appendChild(input);
        document.getElementById("nine").disabled = true;
        currentMove = playerTwo;
    } else if (currentMove == playerTwo) {
        const input = document.createElement('p');
        input.textContent = 'O'
        btn9.appendChild(input);
        document.getElementById("nine").disabled = true;
        currentMove = playerOne;
    };})