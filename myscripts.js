const btn = document.querySelector('#one');
btn.addEventListener('click', () => {
    const input = document.createElement('p');
    input.textContent = 'X'
    btn.appendChild(input);
    document.getElementById("one").disabled = true;
})