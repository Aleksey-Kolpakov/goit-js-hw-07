//input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов" />
const validationInput = document.querySelector('#validation-input');
// console.log(validationInput);

validationInput.addEventListener('change', function (event) {
    // console.log(event.target.value.length);
    // console.log(event.srcElement.dataset.length);
    // console.log(event);

    if (event.target.value.length == event.srcElement.dataset.length) {
        // validationInput.classList.replace('invalid-js', 'valid-js');
        validationInput.classList.remove('invalid-js');
        validationInput.classList.add('valid-js');


    } else {
        // validationInput.classList.replace('valid-js', 'invalid-js');
        validationInput.classList.remove('valid-js');
        validationInput.classList.add('invalid-js');
    }
});
