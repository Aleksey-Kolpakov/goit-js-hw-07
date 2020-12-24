function randColor() {
    //   let element = document.querySelector(elem),
    const r = Math.floor(Math.random() * (256));
    const g = Math.floor(Math.random() * (256));
    const b = Math.floor(Math.random() * (256));
    const color = `rgb(${r},${g},${b})`;
    // element.style.background = color;        
    return color;
}
const divBoxesElement = document.querySelector('#boxes');

const renderButton = document.querySelector('button[data-action="render"]');
const destroyButton = document.querySelector('button[data-action="destroy"]');
const elementsInput = document.querySelector('#controls > input');
const controlsDiv = document.querySelector('#controls');
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
    divBoxesElement.innerHTML = "";
    // способ 2
    // const newDivBoxes = divBoxesElement.cloneNode(false);
    // divBoxesElement.before(newDivBoxes);
    // divBoxesElement.remove()
    // divBoxesElement = newDivBoxes;
    // способ 3
    // const boxElements = divBoxesElement.children;
    // const length = boxElements.length;
    // for (let i = length - 1; i >= 0; i -= 1) {


    //     divBoxesElement.removeChild(boxElements[i])
    // }
});