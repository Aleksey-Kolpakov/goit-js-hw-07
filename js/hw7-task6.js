//input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов" />
const validationInput = document.querySelector('#validation-input');
console.log(validationInput.dataLength);


const dataLength = Number(validationInput.getAttribute('data-length'));
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
