const form = document.querySelector('form.login-form');

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email: email,
        password: password,
    }

    if ( email === "" || password === "") {
        return window.alert('Please, fill in all the necessary fields');
    }

    console.log(formData);
    form.reset();
}

form.addEventListener('submit', onFormSubmit);
