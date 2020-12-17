const liItemList = document.querySelectorAll('.item');
console.log(`В списке ${liItemList.length} категории.`);
const h2List = document.querySelectorAll('.item>h2');
console.log(h2List);
// const listOfLi = document.querySelectorAll('.item li');
// console.log(listOfLi);

h2List.forEach(h2 => {
    const elementNumber = h2.nextElementSibling.children;
    console.log(`Категория: ${h2.textContent} Количество элементов: ${elementNumber.length}`);

});
