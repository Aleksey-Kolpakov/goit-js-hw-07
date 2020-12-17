const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const liItems = [];
ingredients.forEach(ingredient => {
    const liItem = document.createElement('li');
    liItem.textContent = ingredient;
    liItems.push(liItem);
})

const ulIngredients = document.querySelector('#ingredients');
console.log(ulIngredients);
console.log(liItems);

ulIngredients.append(...liItems);
