const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector('ul#ingredients');

const addIngredients = ingredients.map((ingredient) => {
  const ingredientLi = document.createElement('li');
  ingredientLi.classList.add('item');
  ingredientLi.textContent = ingredient;
  const ingredientsUl = document.querySelector('ul#ingredients');
  
  return ingredientLi;
});

ingredientsUl.append(...addIngredients);