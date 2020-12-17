const nameInput = document.querySelector('#name-input');
const spanOutput = document.querySelector('#name-output');
// console.log(nameInput, spanOutput);

nameInput.addEventListener('input', (event) => {
    spanOutput.textContent = event.target.value ? event.target.value : "Незнакомец";
    // console.log(event);

});
