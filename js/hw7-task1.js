const liItemList = document.querySelectorAll('.item');
console.log(`В списке ${liItemList.length} категории.`);
liItemList.forEach(liItem => {
    const h2Ref = liItem.querySelector('h2');
    const liList = liItem.querySelectorAll('li');
    console.log(`Категория: ${h2Ref.textContent} Количество элементов: ${liList.length}`);
})

