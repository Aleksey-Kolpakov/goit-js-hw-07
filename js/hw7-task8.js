function randColor() {
    //   let element = document.querySelector(elem),
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    // element.style.background = color;        
    return color;
}
console.log(randColor());
const divBoxesElement = document.querySelector('#boxes');
console.log(divBoxesElement);


const renderButton = document.querySelector('button[data-action="render"]');
const destroyButton = document.querySelector('button[data-action="destroy"]');
const elementsInput = document.querySelector('#controls > input');
console.log(elementsInput.value);
const createBoxes = function () {
    let width = 30;
    let objectGalery = '';
    console.log(typeof (Number(elementsInput.value)));

    for (let i = 0; i < Number(elementsInput.value); i += 1) {
        objectGalery = objectGalery + `<div class="box-item" style=" width:${width}px; height:${width}px; background-color:${randColor()}"/></div>`;
        width += 10;

    }
    divBoxesElement.insertAdjacentHTML('afterbegin', objectGalery);
    console.log(divBoxesElement.children);
};
renderButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', () => {
    divBoxesElement.insertAdjacentHTML('afterbegin', '');
    const boxElements = divBoxesElement.children;
    console.log(boxElements);

    console.log(boxElements.length);
    const length = boxElements.length;
    for (let i = length - 1; i >= 0; i -= 1) {
        console.log(boxElements[i]);

        divBoxesElement.removeChild(boxElements[i])
    }
});