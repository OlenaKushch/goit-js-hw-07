const loginFormEl = document.querySelector(".login-form");


loginFormEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const { email, password }
    = loginFormEl.elements;

    const trimmedEmail = email.value.trim();
    const trimmedPassword = password.value.trim();

    if (trimmedEmail === '' || trimmedPassword === '') {
        alert('All form fields must be filled in');
        return;
    }
    const formData = {
        email: trimmedEmail,
        password: trimmedPassword,
    };
    console.dir(formData);

    loginFormEl.reset();
});
