const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);

const result = categories.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`); 
});