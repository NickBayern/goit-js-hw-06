let valueEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const decrBtn = document.querySelector('#counter').firstElementChild;
const incrBtn = document.querySelector('#counter').lastElementChild;

decrBtn.addEventListener('click', event => {
    valueEl -= 1;

    counterValue.innerText = valueEl;
});

incrBtn.addEventListener('click', event => {
    valueEl += 1;

    counterValue.innerText = valueEl;
});