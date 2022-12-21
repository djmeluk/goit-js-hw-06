
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul#ingredients');
for (let ingredient of ingredients) {
  
  const itemEL = document.createElement('li');
  itemEL.classList.add("item");
  itemEL.textContent = ingredient;
  list.appendChild(itemEL);
};
 





