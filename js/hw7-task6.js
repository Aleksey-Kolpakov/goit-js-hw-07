//input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов" />
const validationInput = document.querySelector('#validation-input');
// console.log(validationInput);
const dataLength = Number(validationInput.getAttribute('data-length'));
console.log(dataLength);
const checkInput = function () {
    if (validationInput.value.length === dataLength) {

        validationInput.classList.remove('invalid-js');
        validationInput.classList.add('valid-js');


    } else {

        validationInput.classList.remove('valid-js');
        validationInput.classList.add('invalid-js');
    }
}

validationInput.addEventListener('change', checkInput);
