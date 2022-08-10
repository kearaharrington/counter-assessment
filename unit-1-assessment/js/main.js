// CONST
const addBtn = document.getElementById('plus');
const subtractBtn = document.getElementById('minus');
const display = document.getElementById('current-value');
const inputBox = document.querySelector('input');


// Event Listeners
addBtn.addEventListener('click', addFunction);
subtractBtn.addEventListener('click', subtractFunction);

// Functions

// Parse Int
function displayValue() {
    let currentValue = parseInt(display.textContent);
    return currentValue;
};

function inputValue() {
    let numberInput = parseInt(inputBox.value);
    return numberInput;
}

// Addition
function addFunction() {
    let startValue = displayValue();
    let addValue = inputValue();
    let newValue = startValue + addValue;
    display.innerText = newValue;
    redNumber();
};

// Subtraction
function subtractFunction() {
    let startValue = displayValue();
    let minusValue = inputValue();
    let newValue = startValue - minusValue;
    display.innerText = newValue;
    redNumber();
};

// Negative Red
function redNumber() {
    let number = displayValue();
    if (number < 0) {
        display.style.color = 'red';
    } else {
        display.style.color = 'black';
    }
};