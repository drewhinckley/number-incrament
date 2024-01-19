
let count = 0;

const countDisplay = document.getElementById("countDisplay");

// the adding button, subtracting button, and the input.
const countButton = document.getElementById("incrament-btn");
const subtractButton = document.getElementById("subtract-button");
const numberInput = document.getElementById("number-input");


countDisplay.textContent = count;


const handleCount = (mode) => {
    if (mode === 'increment') {
        count ++;
        countDisplay.textContent = count
    }
    if (mode === 'reset') {
        count = 0;
        countDisplay.textContent = count
    }
    if (mode === 'subtract') {
        count --;
        countDisplay.textContent = count;
    }
};

countButton.addEventListener("click", () => {
    handleCount('increment');
})

const otherButton = document.getElementById("reset-button");

otherButton.addEventListener("click", () => {
    handleCount('reset');
})

subtractButton.addEventListener("click", () => {
    handleCount('subtract');
})

numberInput.addEventListener("change", (e) => {
    const number = Number(e.target.value);
    const newValue = number || count
    countDisplay.textContent = newValue
    count = newValue
})