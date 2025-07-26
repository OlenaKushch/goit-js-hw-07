const formInput = document.querySelector('#name-input');
console.dir(formInput);

const formOutput = document.querySelector('#name-output');
console.dir(formOutput);

formInput.addEventListener('input', () => {
    const trimmedEl = formInput.value.trim();

    formOutput.textContent = trimmedEl === '' ? 'Anonymous' : trimmedEl;


}); 