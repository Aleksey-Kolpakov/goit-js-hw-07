let counterValue = 0;
const decrementButton = document.querySelector('button[data-action="decrement"]');
const spanCounter = document.querySelector('#value');
const incrementButton = document.querySelector('button[data-action="increment"]');

decrementButton.addEventListener('click', () => {
    if (counterValue > 0) {
        counterValue -= 1;
    }
    spanCounter.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
    counterValue = counterValue + 1;
    spanCounter.textContent = counterValue;
});


