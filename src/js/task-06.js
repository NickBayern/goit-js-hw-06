const input = document.querySelector('#validation-input');
console.log(input.dataset.length);

function onInputBlur(event) {
    if (event.currentTarget.value.length >= event.currentTarget.dataset.length) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }
}

input.addEventListener('blur', onInputBlur);