const nameInput = document.getElementById('name-input');
const changeButton = document.getElementById('change-button');
const nameDisplay = document.getElementById('name-display');
let timesChanged = document.getElementById('times-changed');
let count = 0;
timesChanged.textContent = count;
changeButton.addEventListener('click', () => {
    nameDisplay.textContent = nameInput.value;
    count++;
    timesChanged.textContent = count.value;
});