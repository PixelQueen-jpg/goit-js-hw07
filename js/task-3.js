const input = document.querySelector('#name-input');

input.addEventListener('input', function (e) {
    const name = document.querySelector('#name-output');
    const trimmedValue = e.target.value.trim();
    if (trimmedValue === '') {
        name.textContent = "Anonymous";
    } else {
        name.textContent = trimmedValue;
    }
});