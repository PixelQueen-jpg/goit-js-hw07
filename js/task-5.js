const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

button.addEventListener('click', function () {
    const hexColor = getRandomHexColor();
    color.textContent = hexColor;
    body.style.backgroundColor = hexColor;
});